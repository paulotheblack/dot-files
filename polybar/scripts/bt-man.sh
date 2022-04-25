#!/bin/sh

case $1 in
    "toogle")
        if [ $(bluetoothctl show | grep "Powered: yes" | wc -c) -eq 0 ]
        then
            bluetoothctl power on
        else
            bluetoothctl power off
        fi
        ;;
    "status")
        if [ $(bluetoothctl show | grep "Powered: yes" | wc -c) -eq 0 ]
        then
            echo "%{F#f44336}%{F-}"
        else
            if [ $(echo info | bluetoothctl | grep 'Device' | wc -c) -eq 0 ]
            then 
                echo "%{F#03A9F4}%{F-}"
            fi
            echo "%{F#2193ff}%{F-}"
        fi
        ;;
    *)
        echo "Invalid option '$1'"
        ;;
esac