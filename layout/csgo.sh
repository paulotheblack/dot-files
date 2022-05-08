#!/bin/sh

echo "@mpbw CS:GO _eDP1"

TOKILL=("telegram-desktop" "signal-desktop" "Discord" "firefox" "code-insiders" "redshift-gtk" "polybar" "picom")

for tool in ${TOKILL[@]}; do
    ret=$(killall "$tool")
    if [[ "$ret" -eq 0 ]]; then 
	    echo -e "\033[0;31m$a\033[0m"
    fi
done

xrandr --output eDP-1 --set 'scaling mode' 'Full'
xrandr --output eDP-1 --mode 800x600 --rate 60 --output HDMI-1 --off

echo "res 800x600 streched; 60Hz; ... glhf"




