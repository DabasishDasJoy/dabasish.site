# PowerShell script to create a ZIP archive of the portfolio
# Excludes git-related files and other unnecessary files

$excludeFiles = @(
    ".git",
    ".github",
    "*.zip",
    "*.tar.gz",
    "create-archive.ps1"
)

$filesToArchive = Get-ChildItem -Path . -Exclude $excludeFiles

$archiveName = "portfolio-$(Get-Date -Format 'yyyy-MM-dd').zip"

Write-Host "Creating archive: $archiveName" -ForegroundColor Green

Compress-Archive -Path $filesToArchive -DestinationPath $archiveName -Force

Write-Host "Archive created successfully!" -ForegroundColor Green
Write-Host "File: $archiveName" -ForegroundColor Cyan
Write-Host "Size: $((Get-Item $archiveName).Length / 1MB) MB" -ForegroundColor Cyan

