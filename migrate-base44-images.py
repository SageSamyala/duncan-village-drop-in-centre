import re
import hashlib
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse

ROOT = Path(".")
SRC = ROOT / "src"
ASSETS = ROOT / "public" / "assets"

ASSETS.mkdir(parents=True, exist_ok=True)

extensions = {".js", ".jsx", ".ts", ".tsx", ".css", ".html"}

urls = set()

for path in SRC.rglob("*"):
    if path.is_file() and path.suffix in extensions:
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue

        found = re.findall(
            r'https://media\.base44\.com/[^\s"\'<>]+',
            text
        )

        for url in found:
            url = url.rstrip("),;")
            urls.add(url)

print(f"Found {len(urls)} Base44 image URLs.")

replacements = {}

for i, url in enumerate(sorted(urls), 1):
    parsed = urlparse(url)
    original_name = Path(parsed.path).name or f"image-{i}.jpg"

    # Remove query strings / unsafe characters
    original_name = re.sub(r"[^A-Za-z0-9._-]", "-", original_name)

    # Prevent duplicate filenames
    digest = hashlib.sha1(url.encode()).hexdigest()[:10]
    filename = f"{digest}-{original_name}"

    destination = ASSETS / filename
    local_url = f"/assets/{filename}"

    print(f"[{i}/{len(urls)}] {original_name}")

    try:
        if not destination.exists():
            req = Request(
                url,
                headers={"User-Agent": "Mozilla/5.0"}
            )

            with urlopen(req, timeout=30) as response:
                data = response.read()

            destination.write_bytes(data)
            print("  Downloaded")
        else:
            print("  Already downloaded")

        replacements[url] = local_url

    except Exception as e:
        print(f"  FAILED: {e}")

print("\nReplacing URLs in source files...")

for path in SRC.rglob("*"):
    if path.is_file() and path.suffix in extensions:
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue

        original = text

        for old, new in replacements.items():
            text = text.replace(old, new)

        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"Updated: {path}")

print("\nMigration complete.")
print(f"Images stored in: {ASSETS}")
print(f"Successfully migrated: {len(replacements)}")
