#!/usr/bin/python3

# @author:  ecceman
# @url:     https://github.com/ecceman/bt-stat
# @mod:     MAC's of personal devices

import subprocess
from shutil import which


class BTdevice():
    def __init__(self, name, mac):
        self.name = name
        self.mac = mac

    def getProperties(self):
        return self.name, self.mac


bt_devices = {
    BTdevice(name='XM3', mac='38:18:4C:E9:B5:47'),
    BTdevice(name='K380', mac='20:03:04:28:60:13'),
    BTdevice(name='JBL-GO2', mac='04:CB:88:D0:6B:33')
    }

if which("bluetoothctl") is not None:
    connected_devices = ''
    bt_connected = "no"
    for dev in bt_devices:
        name, mac = dev.getProperties()
        cmd_bt_connected = 'bluetoothctl info ' + mac + ' | grep -i connected | awk \'{print $2}\''
        t = subprocess.Popen([cmd_bt_connected], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, shell=True)
        bt_connected = t.stdout.read().decode('utf-8').strip('\n')
        if bt_connected == "yes":
            connected_devices += name + ' '

    print(connected_devices)

    if bt_connected == "no":
        print("0")
else:
    print("bluetoothctl missing")
