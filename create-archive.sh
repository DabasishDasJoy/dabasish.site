#!/bin/bash
# Bash script to create a TAR.GZ archive of the portfolio
# For use on Linux/Ubuntu or Git Bash on Windows

ARCHIVE_NAME="portfolio-$(date +%Y-%m-%d).tar.gz"

echo "Creating archive: $ARCHIVE_NAME"

tar -czf "$ARCHIVE_NAME" \
    --exclude='.git' \
    --exclude='.github' \
    --exclude='*.zip' \
    --exclude='*.tar.gz' \
    --exclude='create-archive.*' \
    .

echo "Archive created successfully!"
echo "File: $ARCHIVE_NAME"
echo "Size: $(du -h "$ARCHIVE_NAME" | cut -f1)"

