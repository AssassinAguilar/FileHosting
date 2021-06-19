import subprocess, sys

subprocess.call ([sys.executable, "-m", "pip", "-q", "install", "cv2"])

import cv2

cam = cv2.VideoCapture(0)

while True:
    ret, frame = cam.read() 
    cv2.imshow('frame', frame) 
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

vid.release()
cv2.destroyAllWindows()
