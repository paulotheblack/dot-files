#!/bin/bash

echo "... CSGO preset mpbw"

# kill programs
programs=("telegram-desktop" "signal-desktop" "Discord" "firefox" "code" "pycharm" "clion" "fluxgui" "polybar" "picom")

for p in ${programs[@]}; do
	killall -q "$p"
done

xrandr --output eDP1 --off --output HDMI1 --mode 1024x768

echo "Done! GL&HF."
