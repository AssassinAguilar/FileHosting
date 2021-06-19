import subprocess, sys

def install (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "-q", "install", package])

def download (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "-q", "download", package])

def upgrade (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "-q", "install", "--upgrade", package])

def info (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "show", package])

def uninstall (*packages):
    for package in packages:
        subprocess.call ([sys.executable, "-m", "pip", "-q", "uninstall", package])

def freeze (*files):
    for file in files:
        subprocess.call ([sys.executable, "-m", "pip", "-q", "freeze", ">", file])

def list ():
    subprocess.call ([sys.executable, "-m", "pip", "list"])

def help ():
    subprocess.call ([sys.executable, "-m", "pip", "help"])

upgrade ("pip")
