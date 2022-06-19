#!/bin/sh

TOKILL=("telegram-desktop"
       	"signal-desktop"
       	"Discord"
       	"firefox"
       	"code-insiders"
       	"redshift-gtk"
       	"picom"
	"polybar")

for tool in ${TOKILL[@]}; do
    ret=$(killall "$tool")
    if [[ "$ret" -eq 0 ]]; then 
	    echo -e "\033[0;31m$a\033[0m"
    fi
done

# pause dunst
killall -SIGUSR1 dunst

# EDP1
# xrandr --output eDP1 --mode 800x600 --rate 60 --output HDMI1 --off

# HDMI1
xrandr --output HDMI1 --mode 800x600  -r 75

# DP1-3 ( dock, VGA - AcerBRQ )
# xrandr --output DP1-3 --mode 800x600 -r 75
