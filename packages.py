import subprocess, sys

def install (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "install", package])

def download (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "download", package])

def upgrade (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "install", "--upgrade", package])

def uninstall (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "uninstall", package])

upgrade ("pip")
