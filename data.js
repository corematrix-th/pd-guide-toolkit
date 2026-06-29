const APP_OPTIONS = {
  "select": [
    "-- Select --",
    "Same issue",
    "Work fine",
    "Not test"
  ],
  "swap": [
    "-- Select --",
    "Same issue",
    "Work fine",
    "Not test"
  ],
  "yesno": [
    "-- Select --",
    "No",
    "Yes"
  ],
  "diag": [
    "-- Select --",
    "Failed",
    "Pass",
    "Not test"
  ],
  "fan": [
    "-- Select --",
    "No spin",
    "Spin"
  ],
  "mute": [
    "-- Select --",
    "Mute",
    "Unmute"
  ],
  "battery_health": [
    "-- Select --",
    "Good",
    "Warning",
    "Fair"
  ],
  "battery_percent": [
    "-- Select --",
    "0%",
    "Over 10%",
    "Cross Mark"
  ],
  "typec_port": [
    "-- Select --",
    "Same issue",
    "Work fine",
    "Not test",
    "No Other Port"
  ],
  "shutter": [
    "-- Select --",
    "Open",
    "Closed",
    "No Shutter",
    "Not test"
  ],
  "airplane": [
    "-- Select --",
    "Off",
    "On"
  ],
  "detail_only": [
    "-- Select --"
  ],
  "reboot_occurs": [
    "-- Select --",
    "Before Windows",
    "During Windows loading",
    "After Windows login",
    "Randomly",
    "Not test"
  ],
  "bsod_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not test"
  ],
  "task_manager_usage": [
    "-- Select --",
    "CPU high",
    "Memory high",
    "Disk high",
    "GPU high",
    "Normal",
    "Not test"
  ],
  "freeze_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not test"
  ],
  "onoff": [
    "-- Select --",
    "On",
    "Off",
    "Not test"
  ],
  "impact": [
    "-- Select --",
    "No",
    "Yes",
    "Not sure"
  ],
  "disable_enable": [
    "-- Select --",
    "Disabled",
    "Enabled",
    "Not test"
  ]
};

const LEVELS = {
  "boot": {
    "name": "Boot",
    "symptoms": {
      "no_power": {
        "name": "No power",
        "defaultResult": "Dispatch",
        "defaultPart": "Mainboard",
        "questions": {
          "thinkpad": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Charge LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap other Type-C port test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Adapter tested on another machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "ideapad": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "LED beside charging port",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Adapter tested on another machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Novo Button",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "desktop": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap power cable test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap power outlet test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power drain",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "aio": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter / Power cable test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ]
        }
      },
      "pond": {
        "name": "Power on no display",
        "defaultResult": "Dispatch",
        "defaultPart": "Mainboard / LCD Panel",
        "questions": {
          "thinkpad": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "External Monitor test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap RAM test",
              "options": "swap"
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "ideapad": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "External Monitor test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap RAM test",
              "options": "swap"
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "desktop": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap monitor test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap HDMI/DP cable test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap RAM test",
              "options": "swap"
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ],
          "aio": [
            {
              "label": "Power LED",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan spinning",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "External Monitor test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Power Reset / Emergency Reset",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap RAM test",
              "options": "swap"
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            }
          ]
        }
      },
      "pond_beep": {
        "name": "Power on no display + Beep code",
        "defaultResult": "Dispatch",
        "defaultPart": "Mainboard / Memory",
        "common": [
          {
            "label": "Beep code / pattern",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "Fan spinning",
            "options": "fan",
            "text": false,
            "diag": false
          },
          {
            "label": "External Monitor test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap RAM test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "boot_loop": {
        "name": "Boot loop",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / SSD / Mainboard",
        "common": [
          {
            "label": "Can boot into BIOS",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Can boot into Safe Mode",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "stuck_logo": {
        "name": "Stuck Lenovo Logo",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / Mainboard",
        "common": [
          {
            "label": "Can boot into BIOS",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Storage",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "auto_repair": {
        "name": "Stuck Automatic Repair",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / SSD",
        "common": [
          {
            "label": "System Restore",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Storage",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "windows": {
    "name": "Windows",
    "symptoms": {
      "slow": {
        "name": "Slow",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / SSD / Mainboard",
        "common": [
          {
            "label": "Check Task Manager usage",
            "options": "task_manager_usage"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Check storage free space",
            "options": "select"
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "freeze": {
        "name": "Freeze",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / Mainboard / SSD",
        "common": [
          {
            "label": "Freeze occurs",
            "options": "freeze_occurs"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "auto_shutdown": {
        "name": "Auto shutdown",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan / Thermal / Mainboard",
        "common": [
          {
            "label": "Can access Windows",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Check temperature / Overheat",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Fan spinning",
            "options": "fan",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "auto_reboot": {
        "name": "Auto reboot",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / Mainboard",
        "common": [
          {
            "label": "Auto reboot occurs",
            "options": "reboot_occurs"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Event Viewer / Dump file collected",
            "options": "yesno"
          },
          {
            "label": "Swap RAM test",
            "options": "swap"
          },
          {
            "label": "Swap SSD test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "bsod": {
        "name": "BSOD",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / Mainboard / Storage",
        "common": [
          {
            "label": "BSOD occurs",
            "options": "bsod_occurs"
          },
          {
            "label": "Stop code / Error code collected",
            "options": "yesno",
            "text": true
          },
          {
            "label": "Event Viewer / Dump file collected",
            "options": "yesno"
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Swap RAM test",
            "options": "swap"
          },
          {
            "label": "Swap SSD test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "fingerprint": {
        "name": "Fingerprint Login",
        "defaultResult": "Dispatch",
        "defaultPart": "Fingerprint Reader / Software Troubleshooting",
        "common": [
          {
            "label": "Fingerprint setup in Windows Hello",
            "options": "select"
          },
          {
            "label": "Device Manager shows Fingerprint",
            "options": "yesno"
          },
          {
            "label": "Uninstall Fingerprint Driver and Restart",
            "options": "select"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "BIOS Fingerprint enabled",
            "options": "yesno"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "face_recognition": {
        "name": "Face Recognition",
        "defaultResult": "Dispatch",
        "defaultPart": "Camera Module / Software Troubleshooting",
        "common": [
          {
            "label": "Windows Hello Face setup",
            "options": "select"
          },
          {
            "label": "Windows Camera App",
            "options": "select"
          },
          {
            "label": "Device Manager shows Camera",
            "options": "yesno"
          },
          {
            "label": "Uninstall Camera Driver and Restart",
            "options": "select"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "BIOS Camera enabled",
            "options": "yesno"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "login": {
        "name": "Login issue",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Can login with another account",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Safe Mode test",
            "options": "select"
          },
          {
            "label": "Password / PIN reset",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "black_login": {
        "name": "Black screen after login",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / Mainboard",
        "common": [
          {
            "label": "External Monitor test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Safe Mode test",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Graphics Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "display": {
    "name": "Display",
    "symptoms": {
      "abnormal_line": {
        "name": "Abnormal line",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel",
        "display": true
      },
      "flickering": {
        "name": "Flickering",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel / EDP Cable",
        "display": true
      },
      "dim": {
        "name": "Dim",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel / EDP Cable",
        "display": true
      },
      "black": {
        "name": "Black screen",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel / Mainboard",
        "display": true
      },
      "color": {
        "name": "Color bias",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel",
        "display": true
      },
      "ghost": {
        "name": "Ghost image",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel",
        "display": true
      },
      "dead": {
        "name": "Dead pixel",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel",
        "common": [
          {
            "label": "Pixel location confirmed",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "External Monitor test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "bright": {
        "name": "Bright pixel",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel",
        "common": [
          {
            "label": "Pixel location confirmed",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "External Monitor test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "garbage": {
        "name": "Garbage",
        "defaultResult": "Dispatch",
        "defaultPart": "LCD Panel / EDP Cable / RAM",
        "common": [
          {
            "label": "External Monitor test",
            "options": "select"
          },
          {
            "label": "Check BIOS",
            "options": "select"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Swap RAM test",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      }
    }
  },
  "monitor": {
    "name": "Monitor",
    "symptoms": {
      "abnormal_line": {
        "name": "Display abnormal line",
        "defaultResult": "Dispatch",
        "defaultPart": "Monitor",
        "common": [
          {
            "label": "Swap HDMI/DP cable test",
            "options": "swap"
          },
          {
            "label": "Monitor tested on another machine",
            "options": "swap"
          },
          {
            "label": "Swap monitor test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "no_power": {
        "name": "Monitor no power",
        "defaultResult": "Dispatch",
        "defaultPart": "Monitor",
        "common": [
          {
            "label": "Power LED",
            "options": "yesno"
          },
          {
            "label": "Swap power cord test",
            "options": "swap"
          },
          {
            "label": "Swap monitor test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      }
    }
  },
  "adapter_power": {
    "name": "Adapter",
    "symptoms": {
      "adapter": {
        "name": "Adapter",
        "defaultResult": "Dispatch",
        "defaultPart": "Adapter",
        "common": [
          {
            "label": "Swap AC power cord test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Adapter tested on another machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "cord": {
        "name": "Power cord",
        "defaultResult": "Dispatch",
        "defaultPart": "Power Cord",
        "common": [
          {
            "label": "Swap AC power cord test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Adapter works with another cord",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      }
    }
  },
  "charging": {
    "name": "Battery",
    "symptoms": {
      "typec": {
        "name": "Not Charge",
        "defaultResult": "Dispatch",
        "defaultPart": "Type-C Port / Mainboard",
        "common": [
          {
            "label": "Charge LED",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Type-C port charge",
            "options": "typec_port",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Adapter tested on another machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver / Firmware Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "runtime": {
        "name": "Battery runtime short",
        "defaultResult": "Dispatch",
        "defaultPart": "Battery / Software Troubleshooting",
        "common": [
          {
            "label": "Battery Report collected",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Battery Health in Lenovo Vantage",
            "options": "battery_health",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Battery",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "swollen": {
        "name": "Battery swollen",
        "defaultResult": "Escalate L2",
        "defaultPart": "-",
        "common": [
          {
            "label": "Battery swollen confirmed",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Keyboard / Touchpad affected by swollen battery",
            "options": "impact"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "slow_charge": {
        "name": "Slow charge",
        "defaultResult": "Dispatch",
        "defaultPart": "Adapter / Battery / Mainboard",
        "common": [
          {
            "label": "Original Adapter used",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Battery Conservation Mode",
            "options": "onoff",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Battery",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "not_detect": {
        "name": "Battery not detect / not keep power",
        "defaultResult": "Dispatch",
        "defaultPart": "Battery / Mainboard",
        "common": [
          {
            "label": "Battery percentage",
            "options": "battery_percent",
            "text": false,
            "diag": false
          },
          {
            "label": "Battery Health in Lenovo Vantage",
            "options": "battery_health",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Battery",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "port": {
    "name": "Port",
    "symptoms": {
      "usba": {
        "name": "USB-A",
        "defaultResult": "Dispatch",
        "defaultPart": "USB Port / Mainboard",
        "common": [
          {
            "label": "USB mouse / keyboard test",
            "options": "select"
          },
          {
            "label": "Swap USB port test",
            "options": "select"
          },
          {
            "label": "Swap USB device test",
            "options": "select"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "usbc": {
        "name": "USB-C Data",
        "defaultResult": "Dispatch",
        "defaultPart": "USB-C Port / Mainboard",
        "common": [
          {
            "label": "Swap USB-C port test",
            "options": "select"
          },
          {
            "label": "Device Manager shows USB error",
            "options": "yesno"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "hdmi": {
        "name": "HDMI",
        "defaultResult": "Dispatch",
        "defaultPart": "HDMI Port / Mainboard",
        "common": [
          {
            "label": "Swap HDMI cable test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "External Monitor test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Graphics Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "sd": {
        "name": "SD Card",
        "defaultResult": "Dispatch",
        "defaultPart": "SD Card Reader / Mainboard",
        "common": [
          {
            "label": "Swap SD Card test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "SD Card test with other machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows card reader",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "smart": {
        "name": "Smart Card",
        "defaultResult": "Dispatch",
        "defaultPart": "Smart Card Reader",
        "common": [
          {
            "label": "Swap Smart Card test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows Smart Card Reader",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "keyboard": {
    "name": "Keyboard",
    "symptoms": {
      "few": {
        "name": "Few key",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Top Cover",
        "questions": {
          "thinkpad": [
            {
              "label": "Specific keys listed",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "USB keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "ideapad": [
            {
              "label": "Specific keys listed",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "USB keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "desktop": [
            {
              "label": "Specific keys listed",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "Swap keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test with other machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "aio": [
            {
              "label": "Specific keys listed",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "Swap keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test with other machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ]
        }
      },
      "all": {
        "name": "All key",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Mainboard",
        "questions": {
          "thinkpad": [
            {
              "label": "USB keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "On-Screen Keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Driver / Windows Update",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "ideapad": [
            {
              "label": "USB keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "On-Screen Keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Driver / Windows Update",
              "options": "select",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "desktop": [
            {
              "label": "Swap keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test with other machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ],
          "aio": [
            {
              "label": "Swap keyboard test",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test with other machine",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Physical damage / Liquid spilled",
              "options": "yesno",
              "text": false,
              "diag": false
            },
            {
              "label": "Other issue",
              "options": "yesno",
              "text": true,
              "diag": false
            },
            {
              "label": "FRU P/N",
              "options": "detail_only",
              "text": true
            }
          ]
        }
      },
      "auto_type": {
        "name": "Keyboard auto type",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Top Cover",
        "common": [
          {
            "label": "Specific keys listed",
            "options": "detail_only",
            "text": true
          },
          {
            "label": "Key stuck / sunk",
            "options": "yesno"
          },
          {
            "label": "USB keyboard test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "On-Screen Keyboard test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver / Windows Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "backlight": {
        "name": "Backlight",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard",
        "common": [
          {
            "label": "Keyboard backlight hotkey test",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Keyboard Backlight setting",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Vantage setting",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "fn": {
        "name": "FN key",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Software Troubleshooting",
        "common": [
          {
            "label": "FN Lock checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Hotkey Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Hotkey mode",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "left_ctrl": {
        "name": "Keyboard Left Ctrl",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Top Cover",
        "common": [
          {
            "label": "Keyboard Online Test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "FN & Ctrl Swap",
            "options": "disable_enable",
            "text": false,
            "diag": false
          },
          {
            "label": "USB keyboard test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "hotkey": {
        "name": "Hotkey",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / Software Troubleshooting",
        "common": [
          {
            "label": "Lenovo Hotkey Features update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Specific hotkey listed",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "mouse": {
    "name": "Mouse",
    "symptoms": {
      "mouse_not_work": {
        "name": "Mouse not work",
        "defaultResult": "Dispatch",
        "defaultPart": "Mouse Replacement / USB Port",
        "common": [
          {
            "label": "Swap USB port test",
            "options": "select"
          },
          {
            "label": "Swap mouse test",
            "options": "select"
          },
          {
            "label": "Mouse test on another machine",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "wireless": {
        "name": "Wireless mouse not detect",
        "defaultResult": "Dispatch",
        "defaultPart": "Wireless Mouse / Receiver",
        "common": [
          {
            "label": "Swap Battery test",
            "options": "select"
          },
          {
            "label": "Swap mouse test",
            "options": "select"
          },
          {
            "label": "Swap USB port test",
            "options": "select"
          },
          {
            "label": "Mouse test on another machine",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "click_l_double": {
        "name": "Mouse click L double",
        "defaultResult": "Dispatch",
        "defaultPart": "Mouse Replacement",
        "common": [
          {
            "label": "Mouse test on another machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap mouse test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      },
      "scroll": {
        "name": "Scroll mouse not work",
        "defaultResult": "Dispatch",
        "defaultPart": "Mouse Replacement",
        "common": [
          {
            "label": "Swap app test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Mouse test on another machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Clean scroll wheel",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "FRU P/N",
            "options": "detail_only",
            "text": true
          }
        ]
      }
    }
  },
  "network": {
    "name": "Network",
    "symptoms": {
      "wifi": {
        "name": "Wi-Fi",
        "defaultResult": "Dispatch",
        "defaultPart": "WLAN Card / Mainboard",
        "common": [
          {
            "label": "Can detect Wi-Fi signal",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Wi-Fi / Hotspot test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Airplane Mode",
            "options": "airplane",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows Wireless Driver",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Wireless Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Wi-Fi Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "lan": {
        "name": "LAN",
        "defaultResult": "Dispatch",
        "defaultPart": "LAN Port / Mainboard",
        "common": [
          {
            "label": "Swap LAN cable test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Another Router test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Enable LAN in BIOS",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "LAN Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "USB to LAN Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Check LAN pin / damage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "bluetooth": {
        "name": "Bluetooth",
        "defaultResult": "Dispatch",
        "defaultPart": "WLAN Card / Mainboard",
        "common": [
          {
            "label": "Bluetooth toggle available",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows Bluetooth",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Bluetooth device test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Bluetooth Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Bluetooth Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "wwan": {
        "name": "WWAN",
        "defaultResult": "Dispatch",
        "defaultPart": "WWAN Card / Antenna",
        "common": [
          {
            "label": "SIM detected",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "WWAN device in Device Manager",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "WWAN Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "sim": {
        "name": "SIM",
        "defaultResult": "Dispatch",
        "defaultPart": "SIM Tray / WWAN Card",
        "common": [
          {
            "label": "SIM card detected",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap SIM test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "SIM tray damage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "WWAN Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "smart_card_reader": {
        "name": "Smart Card Reader",
        "defaultResult": "Dispatch",
        "defaultPart": "Smart Card Reader / Mainboard",
        "common": [
          {
            "label": "Swap Smart Card test",
            "options": "swap"
          },
          {
            "label": "Device Manager shows Smart Card Reader",
            "options": "yesno"
          },
          {
            "label": "Smart Card Driver Update",
            "options": "select"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      }
    }
  },
  "storage": {
    "name": "Storage",
    "symptoms": {
      "ssd": {
        "name": "SSD not detect",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / Mainboard",
        "common": [
          {
            "label": "Can access Windows",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Swap SSD test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "ssd_not_detect_windows_setup": {
        "name": "SSD not detect (Windows Setup)",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / Storage Firmware / Mainboard",
        "common": [
          {
            "label": "BIOS detects storage",
            "options": "yesno"
          },
          {
            "label": "Secure Boot disabled",
            "options": "select"
          },
          {
            "label": "Intel RST / Storage Driver loaded",
            "options": "select"
          },
          {
            "label": "Storage Firmware Update",
            "options": "select"
          },
          {
            "label": "Windows Installation USB recreated",
            "options": "select"
          },
          {
            "label": "Lenovo Diagnostics Storage",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "hdd": {
        "name": "HDD not detect",
        "defaultResult": "Dispatch",
        "defaultPart": "HDD / Mainboard",
        "common": [
          {
            "label": "Can access Windows",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Swap HDD test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "audio": {
    "name": "Audio",
    "symptoms": {
      "speaker_no": {
        "name": "Speaker no sound",
        "defaultResult": "Dispatch",
        "defaultPart": "Speaker / Mainboard",
        "common": [
          {
            "label": "Mute checked",
            "options": "mute",
            "text": false,
            "diag": false
          },
          {
            "label": "Output device selected correctly",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Volume Mixer checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows Audio",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Audio Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Headphone test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "speaker_noise": {
        "name": "Speaker noise",
        "defaultResult": "Dispatch",
        "defaultPart": "Speaker",
        "common": [
          {
            "label": "Noise occurs all apps",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Headphone test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "jack": {
        "name": "Audio Jack",
        "defaultResult": "Dispatch",
        "defaultPart": "Audio Jack / Mainboard",
        "common": [
          {
            "label": "Swap headphone test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Output device selected correctly",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Audio Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "mic": {
        "name": "Microphone",
        "defaultResult": "Dispatch",
        "defaultPart": "Microphone / Camera Module",
        "common": [
          {
            "label": "Mic mute checked",
            "options": "mute",
            "text": false,
            "diag": false
          },
          {
            "label": "Input device selected correctly",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Voice Recorder test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Audio Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "External mic test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "echo": {
        "name": "Echo",
        "defaultResult": "Dispatch",
        "defaultPart": "Software Troubleshooting / Microphone",
        "common": [
          {
            "label": "Issue occurs all apps",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Microphone enhancement disabled",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "External mic test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "low": {
        "name": "Speaker low volume",
        "defaultResult": "Dispatch",
        "defaultPart": "Speaker / Software Troubleshooting",
        "common": [
          {
            "label": "Volume level checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Output device selected correctly",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Headphone test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "mic_low": {
        "name": "Microphone low volume",
        "defaultResult": "Dispatch",
        "defaultPart": "Microphone / Software Troubleshooting",
        "common": [
          {
            "label": "Mic mute checked",
            "options": "mute"
          },
          {
            "label": "Input device selected correctly",
            "options": "yesno"
          },
          {
            "label": "Input volume level checked",
            "options": "select"
          },
          {
            "label": "Voice Recorder test",
            "options": "swap"
          },
          {
            "label": "Uninstall Audio Driver and Restart",
            "options": "select"
          },
          {
            "label": "Driver Update",
            "options": "select"
          },
          {
            "label": "External mic test",
            "options": "swap"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      }
    }
  },
  "camera": {
    "name": "Camera",
    "symptoms": {
      "not_work": {
        "name": "Camera not work",
        "defaultResult": "Dispatch",
        "defaultPart": "Camera Module",
        "common": [
          {
            "label": "Camera Shutter",
            "options": "shutter",
            "text": false,
            "diag": false
          },
          {
            "label": "Issue happens on all apps",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Camera App",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Device Manager shows Camera",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Camera Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Camera enabled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "blurry": {
        "name": "Blurry",
        "defaultResult": "Dispatch",
        "defaultPart": "Camera Module",
        "common": [
          {
            "label": "Clean camera lens",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Issue happens on all apps",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Windows Camera App",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "face_recognition": {
        "name": "Face Recognition",
        "defaultResult": "Dispatch",
        "defaultPart": "Camera Module / Software Troubleshooting",
        "common": [
          {
            "label": "Windows Hello Face setup",
            "options": "select"
          },
          {
            "label": "Camera Shutter",
            "options": "shutter"
          },
          {
            "label": "Windows Camera App",
            "options": "select"
          },
          {
            "label": "Device Manager shows Camera",
            "options": "yesno"
          },
          {
            "label": "Uninstall Camera Driver and Restart",
            "options": "select"
          },
          {
            "label": "BIOS Camera enabled",
            "options": "yesno"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Driver Update / Lenovo Vantage",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "lock_on_leave": {
        "name": "Lock on leave function",
        "defaultResult": "Dispatch",
        "defaultPart": "Camera Module / Software Troubleshooting",
        "common": [
          {
            "label": "Lock on leave setting enabled",
            "options": "yesno"
          },
          {
            "label": "Windows Camera App",
            "options": "select"
          },
          {
            "label": "Device Manager shows Camera",
            "options": "yesno"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "BIOS Camera enabled",
            "options": "yesno"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      }
    }
  },
  "touchpad": {
    "name": "Touchpad",
    "symptoms": {
      "cursor": {
        "name": "Cursor",
        "defaultResult": "Dispatch",
        "defaultPart": "Touchpad / Mainboard",
        "common": [
          {
            "label": "External mouse works",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Touchpad enabled in Settings",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Touchpad enabled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "click": {
        "name": "Click",
        "defaultResult": "Dispatch",
        "defaultPart": "ClickPad / C-cover",
        "common": [
          {
            "label": "External mouse works",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "ClickPad enabled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "jump": {
        "name": "Jump",
        "defaultResult": "Dispatch",
        "defaultPart": "Touchpad / C-cover",
        "common": [
          {
            "label": "Disable Touchpad test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "External mouse test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Clean touchpad surface",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      },
      "track": {
        "name": "TrackPoint",
        "defaultResult": "Dispatch",
        "defaultPart": "Keyboard / TrackPoint",
        "common": [
          {
            "label": "TrackPoint enabled in BIOS",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "External mouse works",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ]
      }
    }
  },
  "fan": {
    "name": "Fan",
    "symptoms": {
      "fan_error": {
        "name": "Fan Error",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan / Thermal Module",
        "common": [
          {
            "label": "Check temperature / Overheat",
            "options": "yesno"
          },
          {
            "label": "Fan spinning",
            "options": "fan"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load default BIOS",
            "options": "select"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "fan_noise": {
        "name": "Fan noise",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan / Thermal Module",
        "common": [
          {
            "label": "Noise occurs all the time",
            "options": "yesno"
          },
          {
            "label": "Check temperature / Overheat",
            "options": "yesno"
          },
          {
            "label": "Fan area cleaned",
            "options": "select"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load default BIOS",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "fan_spin_high": {
        "name": "Fan spin high",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan / Thermal / Software Troubleshooting",
        "common": [
          {
            "label": "Check temperature / Overheat",
            "options": "yesno"
          },
          {
            "label": "High CPU usage checked",
            "options": "select"
          },
          {
            "label": "Task Manager checked",
            "options": "select"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load default BIOS",
            "options": "select"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      }
    }
  },
  "bios": {
    "name": "BIOS",
    "symptoms": {
      "bios_pw": {
        "name": "BIOS Password",
        "defaultResult": "Escalate L2",
        "defaultPart": "-",
        "common": [
          {
            "label": "Customer knows password",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Proof of ownership checked",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข หากไม่ทราบรหัสจำเป็นต้องเปลี่ยน Mainboard และไม่ครอบคลุมการรับประกัน"
      },
      "svp": {
        "name": "Supervisor Password",
        "defaultResult": "Escalate L2",
        "defaultPart": "-",
        "common": [
          {
            "label": "Customer knows password",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Proof of ownership checked",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Physical damage / Liquid spilled",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข หากไม่ทราบรหัสจำเป็นต้องเปลี่ยน Mainboard และไม่ครอบคลุมการรับประกัน"
      }
    }
  },
  "error": {
    "name": "Error Code",
    "symptoms": {
      "e0162": {
        "name": "Error 0162 : Setup data integrity check failure",
        "defaultResult": "Dispatch",
        "defaultPart": "BIOS / Mainboard",
        "common": [
          {
            "label": "Load BIOS default",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "CMOS battery / RTC check",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Error photo provided",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "BIOS ตรวจพบว่าการตั้งค่าระบบผิดปกติหรือข้อมูล BIOS เปลี่ยนแปลง"
      },
      "e0188": {
        "name": "Error 0188 : Invalid RFID serialization information area",
        "defaultResult": "Escalate L2",
        "defaultPart": "Mainboard",
        "common": [
          {
            "label": "BIOS default loaded",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Error photo provided",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ข้อมูล RFID หรือข้อมูลประจำเครื่องใน BIOS ไม่ถูกต้อง"
      },
      "e0190": {
        "name": "Error 0190 : Critical low-battery error",
        "defaultResult": "Dispatch",
        "defaultPart": "Battery / Mainboard",
        "common": [
          {
            "label": "Battery charge level checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "แบตเตอรี่มีพลังงานต่ำเกินกว่าจะเริ่มต้นระบบได้"
      },
      "e0271": {
        "name": "Error 0271 : Date and time error",
        "defaultResult": "Dispatch",
        "defaultPart": "RTC Battery / Mainboard",
        "common": [
          {
            "label": "Set date and time in BIOS",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "RTC battery / CMOS check",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "วันที่และเวลาของระบบไม่ถูกต้อง"
      },
      "e1802": {
        "name": "Error 1802 : Unauthorized network card is plugged in",
        "defaultResult": "Escalate L2",
        "defaultPart": "Wireless Card / Mainboard",
        "description": "ตรวจพบอุปกรณ์ Wireless ที่ระบบไม่รองรับหรือไม่ได้รับอนุญาต",
        "common": [
          {
            "label": "Error photo provided",
            "options": "yesno"
          },
          {
            "label": "WLAN / WWAN card changed before issue",
            "options": "yesno"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "e1962": {
        "name": "Error 1962 : No operating system found",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / OS Reinstall / Mainboard",
        "description": "ไม่พบระบบปฏิบัติการสำหรับบูตเข้า Windows",
        "common": [
          {
            "label": "BIOS detects storage",
            "options": "yesno"
          },
          {
            "label": "Boot order checked",
            "options": "select"
          },
          {
            "label": "Lenovo Diagnostics Storage",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Windows Installation",
            "options": "select"
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true
          }
        ]
      },
      "e2100": {
        "name": "Error 2100 : Detection error on storage device",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / HDD / Mainboard",
        "common": [
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap SSD / HDD test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "BIOS ไม่สามารถตรวจพบ SSD หรืออุปกรณ์จัดเก็บข้อมูลได้"
      },
      "e2101": {
        "name": "Error 2101 : Detection error on HDD",
        "defaultResult": "Dispatch",
        "defaultPart": "HDD / Mainboard",
        "common": [
          {
            "label": "BIOS detects HDD",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap HDD test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "BIOS ไม่สามารถตรวจพบ HDD ได้"
      },
      "e2200": {
        "name": "Error 2200 : Machine Type and Serial Number are invalid",
        "defaultResult": "Escalate L2",
        "defaultPart": "Mainboard",
        "common": [
          {
            "label": "BIOS default loaded",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Error photo provided",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ไม่พบข้อมูล Machine Type หรือ Serial Number ของเครื่อง"
      },
      "e2201": {
        "name": "Error 2201 : Machine UUID is invalid",
        "defaultResult": "Escalate L2",
        "defaultPart": "Mainboard",
        "common": [
          {
            "label": "BIOS default loaded",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "BIOS Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Error photo provided",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ไม่พบข้อมูล UUID ของเครื่อง หรือข้อมูลไม่ถูกต้อง"
      },
      "boot_missing": {
        "name": "Boot Device Missing",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / OS Reinstall",
        "common": [
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Boot order checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Lenovo Diagnostics Storage",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Re-install Windows",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "ไม่พบอุปกรณ์สำหรับบูตระบบปฏิบัติการ"
      },
      "pxe": {
        "name": "PXE",
        "defaultResult": "Dispatch",
        "defaultPart": "SSD / OS Reinstall",
        "common": [
          {
            "label": "BIOS detects storage",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Boot order checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Disable UEFI IPv4 / IPv6",
            "options": "select"
          },
          {
            "label": "Network boot disabled",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Other issue",
            "options": "yesno",
            "text": true,
            "diag": false
          }
        ],
        "description": "เครื่องพยายามบูตผ่านระบบเครือข่าย เนื่องจากไม่พบอุปกรณ์สำหรับบูต"
      }
    }
  },
  "manual": {
    "name": "Troubleshooting Guide",
    "manual": true,
    "symptoms": {
      "vantage_update": {
        "name": "Lenovo Vantage Update",
        "guide": "วิธีอัปเดต Driver ผ่าน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ System Update\n3. กด Check for updates\n4. ติดตั้งรายการที่พบ และ Restart เครื่อง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบอัปเดต Driver ผ่าน Lenovo Vantage ตามขั้นตอนด้านล่าง\n\n1. เปิด Lenovo Vantage\n2. ไปที่ System Update\n3. กด Check for updates\n4. ติดตั้งรายการที่พบ และ Restart เครื่อง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบอาการอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease update the drivers through Lenovo Vantage.\n\n1. Open Lenovo Vantage.\n2. Go to System Update.\n3. Click Check for updates.\n4. Install all available updates and restart the machine.\n\nOnce completed, please test the issue again and provide the result back to us."
      },
      "lenovo_diagnostics": {
        "name": "Lenovo Diagnostics",
        "guide": "Lenovo Diagnostics\n\nกรณีเข้า Windows ได้\n\n1. เปิด Lenovo Diagnostics หรือ Lenovo Vantage\n2. เลือก Hardware Scan / Full Test\n3. รอให้การทดสอบเสร็จสิ้น\n4. บันทึกหรือแจ้งผลการทดสอบกลับ\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่องและกด F10 หรือใช้ Novo Button ในบางรุ่น\n2. เข้า Lenovo Diagnostics UEFI\n3. เลือก Run Full Test หรือเลือกทดสอบอุปกรณ์ที่เกี่ยวข้อง\n4. แจ้งผลการทดสอบกลับ",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nLenovo Diagnostics\n\nกรณีเข้า Windows ได้\n\n1. เปิด Lenovo Diagnostics หรือ Lenovo Vantage\n2. เลือก Hardware Scan / Full Test\n3. รอให้การทดสอบเสร็จสิ้น\n4. บันทึกหรือแจ้งผลการทดสอบกลับ\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่องและกด F10 หรือใช้ Novo Button ในบางรุ่น\n2. เข้า Lenovo Diagnostics UEFI\n3. เลือก Run Full Test หรือเลือกทดสอบอุปกรณ์ที่เกี่ยวข้อง\n4. แจ้งผลการทดสอบกลับ\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nLenovo Diagnostics\n\nกรณีเข้า Windows ได้\n\n1. เปิด Lenovo Diagnostics หรือ Lenovo Vantage\n2. เลือก Hardware Scan / Full Test\n3. รอให้การทดสอบเสร็จสิ้น\n4. บันทึกหรือแจ้งผลการทดสอบกลับ\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่องและกด F10 หรือใช้ Novo Button ในบางรุ่น\n2. เข้า Lenovo Diagnostics UEFI\n3. เลือก Run Full Test หรือเลือกทดสอบอุปกรณ์ที่เกี่ยวข้อง\n4. แจ้งผลการทดสอบกลับ\n\nOnce completed, please provide the result back to us."
      },
      "battery_report": {
        "name": "Battery Report",
        "guide": "วิธีดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC > Drive C > Windows > System32 และหาชื่อไฟล์ battery-report.html\n\nสิ่งที่ต้องส่งกลับ\n• battery-report.html",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่างเพื่อดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC > Drive C > Windows > System32 และหาชื่อไฟล์ battery-report.html\n\nเมื่อดำเนินการเรียบร้อยแล้ว รบกวนส่งไฟล์ battery-report.html กลับมา เพื่อให้ทางเราตรวจสอบเพิ่มเติมครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below to generate the Battery Report.\n\n1. Open Command Prompt or CMD.\n2. Type the command: powercfg /batteryreport\n3. Open This PC > Drive C > Windows > System32 and locate battery-report.html.\n\nOnce completed, please send the file back to us for further checking."
      },
      "battery_health": {
        "name": "Battery Health",
        "guide": "วิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Warning กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Warning กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Warning กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nOnce completed, please provide the result back to us."
      },
      "bios_version": {
        "name": "BIOS Version",
        "guide": "วิธีดู BIOS Version\n\nวิธีที่ 1\n1. กด Win + R\n2. พิมพ์ msinfo32\n3. ดูหัวข้อ BIOS Version/Date\n\nวิธีที่ 2\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง systeminfo\n3. ดูหัวข้อ BIOS Version\n\nสิ่งที่ต้องส่งกลับ\n• BIOS Version",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดู BIOS Version\n\nวิธีที่ 1\n1. กด Win + R\n2. พิมพ์ msinfo32\n3. ดูหัวข้อ BIOS Version/Date\n\nวิธีที่ 2\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง systeminfo\n3. ดูหัวข้อ BIOS Version\n\nสิ่งที่ต้องส่งกลับ\n• BIOS Version\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดู BIOS Version\n\nวิธีที่ 1\n1. กด Win + R\n2. พิมพ์ msinfo32\n3. ดูหัวข้อ BIOS Version/Date\n\nวิธีที่ 2\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง systeminfo\n3. ดูหัวข้อ BIOS Version\n\nสิ่งที่ต้องส่งกลับ\n• BIOS Version\n\nOnce completed, please provide the result back to us."
      },
      "product_key": {
        "name": "Windows Product Key",
        "guide": "วิธีดู Windows Product Key\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง wmic path softwarelicensingservice get OA3xOriginalProductKey\n3. กด Enter เพื่อตรวจสอบ Product Key\n\nสิ่งที่ต้องส่งกลับ\n• Product Key หรือผลลัพธ์ที่แสดง",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดู Windows Product Key\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง wmic path softwarelicensingservice get OA3xOriginalProductKey\n3. กด Enter เพื่อตรวจสอบ Product Key\n\nสิ่งที่ต้องส่งกลับ\n• Product Key หรือผลลัพธ์ที่แสดง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดู Windows Product Key\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง wmic path softwarelicensingservice get OA3xOriginalProductKey\n3. กด Enter เพื่อตรวจสอบ Product Key\n\nสิ่งที่ต้องส่งกลับ\n• Product Key หรือผลลัพธ์ที่แสดง\n\nOnce completed, please provide the result back to us."
      },
      "activation": {
        "name": "Windows Activation",
        "guide": "วิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code\n\nOnce completed, please provide the result back to us."
      },
      "reset_pc": {
        "name": "Reset this PC",
        "guide": "Reset this PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset this PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เข้า Windows Recovery Environment (WinRE)\n2. เลือก Troubleshoot\n3. เลือก Reset this PC\n4. เลือก Keep my files หรือ Remove everything\n5. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nReset this PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset this PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เข้า Windows Recovery Environment (WinRE)\n2. เลือก Troubleshoot\n3. เลือก Reset this PC\n4. เลือก Keep my files หรือ Remove everything\n5. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nReset this PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset this PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เข้า Windows Recovery Environment (WinRE)\n2. เลือก Troubleshoot\n3. เลือก Reset this PC\n4. เลือก Keep my files หรือ Remove everything\n5. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nOnce completed, please provide the result back to us."
      },
      "reinstall_windows": {
        "name": "Windows Installation",
        "guide": "วิธีติดตั้ง Windows\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security > Secure Boot > Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการติดตั้ง Windows ตามขั้นตอนด้านล่าง\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security > Secure Boot > Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบอาการอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Windows installation by following the steps below.\n\n1. Download Windows from Microsoft:\nhttps://www.microsoft.com/en-us/software-download/windows11\n\n2. Video guide for creating a USB Installer:\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. After the USB Installer is created:\n• Enter BIOS by repeatedly pressing F1 after powering on the machine.\n• Go to Security > Secure Boot > Disable.\n• Press F10 and select Yes.\nAfter the screen turns off, repeatedly press F12 to enter the Boot Menu.\n• Select the USB device.\n• Then continue following the on-screen instructions.\n\nOnce completed, please test the issue again and provide the result back to us."
      },
      "event_viewer": {
        "name": "Event Viewer",
        "guide": "วิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs > System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs > System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs > System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ\n\nOnce completed, please provide the result back to us."
      },
      "sfc": {
        "name": "SFC /scannow",
        "guide": "วิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nOnce completed, please provide the result back to us."
      },
      "safe_mode": {
        "name": "Safe Mode",
        "guide": "วิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nOnce completed, please provide the result back to us."
      },
      "dump_file": {
        "name": "Dump File",
        "guide": "วิธีดึง Dump File\n\n1. เปิด File Explorer\n2. ไปที่ C:\\Windows\\Minidump\n3. Copy ไฟล์ .dmp ล่าสุด\n4. หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP\n\nสิ่งที่ต้องส่งกลับ\n• ไฟล์ .dmp หรือ MEMORY.DMP",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดึง Dump File\n\n1. เปิด File Explorer\n2. ไปที่ C:\\Windows\\Minidump\n3. Copy ไฟล์ .dmp ล่าสุด\n4. หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP\n\nสิ่งที่ต้องส่งกลับ\n• ไฟล์ .dmp หรือ MEMORY.DMP\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดึง Dump File\n\n1. เปิด File Explorer\n2. ไปที่ C:\\Windows\\Minidump\n3. Copy ไฟล์ .dmp ล่าสุด\n4. หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP\n\nสิ่งที่ต้องส่งกลับ\n• ไฟล์ .dmp หรือ MEMORY.DMP\n\nOnce completed, please provide the result back to us."
      },
      "bitlocker_recovery": {
        "name": "BitLocker Recovery",
        "guide": "BitLocker Recovery\n\nกรณีดึง Recovery Key จากบัญชี Microsoft\n\n1. เปิดเว็บ https://account.microsoft.com/devices/recoverykey\n2. ล็อกอินด้วยบัญชี Microsoft ที่ใช้กับเครื่อง\n3. ตรวจสอบหน้า BitLocker Recovery Keys\n4. ดูชื่อเครื่อง (Device Name) และวันที่บันทึก Key\n5. นำ Recovery Key 48 หลักไปปลดล็อกเครื่อง\n\nกรณีเข้า Windows ได้\n\n1. เปิด Control Panel\n2. ไปที่ BitLocker Drive Encryption\n3. ตรวจสอบสถานะ BitLocker หรือ Backup Recovery Key\n\nหากหา Recovery Key ไม่ได้\n\nแนะนำ Backup ข้อมูลถ้าทำได้ และติดตั้ง Windows ใหม่",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nBitLocker Recovery\n\nกรณีดึง Recovery Key จากบัญชี Microsoft\n\n1. เปิดเว็บ https://account.microsoft.com/devices/recoverykey\n2. ล็อกอินด้วยบัญชี Microsoft ที่ใช้กับเครื่อง\n3. ตรวจสอบหน้า BitLocker Recovery Keys\n4. ดูชื่อเครื่อง (Device Name) และวันที่บันทึก Key\n5. นำ Recovery Key 48 หลักไปปลดล็อกเครื่อง\n\nกรณีเข้า Windows ได้\n\n1. เปิด Control Panel\n2. ไปที่ BitLocker Drive Encryption\n3. ตรวจสอบสถานะ BitLocker หรือ Backup Recovery Key\n\nหากหา Recovery Key ไม่ได้\n\nแนะนำ Backup ข้อมูลถ้าทำได้ และติดตั้ง Windows ใหม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nBitLocker Recovery\n\nกรณีดึง Recovery Key จากบัญชี Microsoft\n\n1. เปิดเว็บ https://account.microsoft.com/devices/recoverykey\n2. ล็อกอินด้วยบัญชี Microsoft ที่ใช้กับเครื่อง\n3. ตรวจสอบหน้า BitLocker Recovery Keys\n4. ดูชื่อเครื่อง (Device Name) และวันที่บันทึก Key\n5. นำ Recovery Key 48 หลักไปปลดล็อกเครื่อง\n\nกรณีเข้า Windows ได้\n\n1. เปิด Control Panel\n2. ไปที่ BitLocker Drive Encryption\n3. ตรวจสอบสถานะ BitLocker หรือ Backup Recovery Key\n\nหากหา Recovery Key ไม่ได้\n\nแนะนำ Backup ข้อมูลถ้าทำได้ และติดตั้ง Windows ใหม่\n\nOnce completed, please provide the result back to us."
      },
      "office_activation": {
        "name": "Microsoft Office Activation",
        "guide": "วิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Error Code\n\nOnce completed, please provide the result back to us."
      },
      "windows11_bypass": {
        "name": "Bypass Windows 11 OOBE",
        "guide": "วิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nOnce completed, please provide the result back to us."
      },
      "always_on_usb": {
        "name": "Always On USB",
        "guide": "วิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nOnce completed, please provide the result back to us."
      },
      "bios_password": {
        "name": "BIOS / Supervisor Password",
        "guide": "BIOS / Supervisor Password\n\nข้อมูลสำคัญ\n\n• ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข\n• หากไม่ทราบรหัส จะไม่สามารถ Clear Password ด้วย Software ได้\n• กรณีลืมรหัส จำเป็นต้องเปลี่ยน Mainboard\n• กรณีนี้ไม่ครอบคลุมการรับประกัน\n\nสิ่งที่ควรแจ้งลูกค้า\n\n1. ตรวจสอบว่าลูกค้าทราบรหัสเดิมหรือไม่\n2. หากไม่ทราบรหัส ให้แจ้งเงื่อนไขการเปลี่ยน Mainboard\n3. แจ้งว่าไม่สามารถเคลมภายใต้ประกันได้",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nBIOS / Supervisor Password\n\nข้อมูลสำคัญ\n\n• ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข\n• หากไม่ทราบรหัส จะไม่สามารถ Clear Password ด้วย Software ได้\n• กรณีลืมรหัส จำเป็นต้องเปลี่ยน Mainboard\n• กรณีนี้ไม่ครอบคลุมการรับประกัน\n\nสิ่งที่ควรแจ้งลูกค้า\n\n1. ตรวจสอบว่าลูกค้าทราบรหัสเดิมหรือไม่\n2. หากไม่ทราบรหัส ให้แจ้งเงื่อนไขการเปลี่ยน Mainboard\n3. แจ้งว่าไม่สามารถเคลมภายใต้ประกันได้\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nBIOS / Supervisor Password\n\nข้อมูลสำคัญ\n\n• ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข\n• หากไม่ทราบรหัส จะไม่สามารถ Clear Password ด้วย Software ได้\n• กรณีลืมรหัส จำเป็นต้องเปลี่ยน Mainboard\n• กรณีนี้ไม่ครอบคลุมการรับประกัน\n\nสิ่งที่ควรแจ้งลูกค้า\n\n1. ตรวจสอบว่าลูกค้าทราบรหัสเดิมหรือไม่\n2. หากไม่ทราบรหัส ให้แจ้งเงื่อนไขการเปลี่ยน Mainboard\n3. แจ้งว่าไม่สามารถเคลมภายใต้ประกันได้\n\nOnce completed, please provide the result back to us."
      },
      "lock_on_leave": {
        "name": "Lock on Leave Function",
        "guide": "Lock on Leave Function\n\nวิธีปิดใน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device หรือ Smart Assist\n3. หาเมนู Presence Detection / Zero Touch Lock / Lock on Leave\n4. ปิดฟังก์ชัน Lock on Leave\n5. Restart เครื่องและทดสอบอีกครั้ง\n\nวิธีตรวจสอบใน BIOS (บางรุ่น)\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Security หรือ Intelligent Security\n3. ตรวจสอบ Presence Detection / Human Presence Detection\n4. Disable ฟังก์ชันที่เกี่ยวข้อง\n5. กด F10 เพื่อ Save และ Restart",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nLock on Leave Function\n\nวิธีปิดใน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device หรือ Smart Assist\n3. หาเมนู Presence Detection / Zero Touch Lock / Lock on Leave\n4. ปิดฟังก์ชัน Lock on Leave\n5. Restart เครื่องและทดสอบอีกครั้ง\n\nวิธีตรวจสอบใน BIOS (บางรุ่น)\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Security หรือ Intelligent Security\n3. ตรวจสอบ Presence Detection / Human Presence Detection\n4. Disable ฟังก์ชันที่เกี่ยวข้อง\n5. กด F10 เพื่อ Save และ Restart\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nLock on Leave Function\n\nวิธีปิดใน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device หรือ Smart Assist\n3. หาเมนู Presence Detection / Zero Touch Lock / Lock on Leave\n4. ปิดฟังก์ชัน Lock on Leave\n5. Restart เครื่องและทดสอบอีกครั้ง\n\nวิธีตรวจสอบใน BIOS (บางรุ่น)\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Security หรือ Intelligent Security\n3. ตรวจสอบ Presence Detection / Human Presence Detection\n4. Disable ฟังก์ชันที่เกี่ยวข้อง\n5. กด F10 เพื่อ Save และ Restart\n\nOnce completed, please provide the result back to us."
      },
      "emergency_reset": {
        "name": "Emergency Reset",
        "guide": "วิธีทำ Emergency Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบ Emergency Reset ตามขั้นตอนด้านล่าง\n\n1. ถอด Adapter ออกจากเครื่อง\n2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nหลังจากดำเนินการแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Emergency Reset by following the steps below.\n\n1. Disconnect the Adapter.\n2. Use a paper clip to press and hold the Emergency Reset hole for about 5–10 seconds.\n3. Reconnect the Adapter.\n4. Power on the machine and test the issue again.\n\nOnce completed, please provide the result back to us."
      },
      "power_reset": {
        "name": "Power Reset",
        "guide": "วิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Work fine หรือ Same issue\n\nOnce completed, please provide the result back to us."
      }
    }
  }
};
const RELATED_GUIDES = {
  "boot": {
    "no_power": [],
    "pond": [],
    "pond_beep": [],
    "boot_loop": [
      "reinstall_windows"
    ],
    "stuck_logo": [
      "reinstall_windows"
    ],
    "auto_repair": [
      "reinstall_windows"
    ]
  },
  "windows": {
    "slow": [
      "reinstall_windows"
    ],
    "freeze": [
      "reinstall_windows"
    ],
    "auto_shutdown": [],
    "auto_reboot": [
      "reinstall_windows",
      "dump_file"
    ],
    "bsod": [
      "dump_file",
      "reinstall_windows"
    ],
    "fingerprint": [],
    "face_recognition": [],
    "login": [
      "safe_mode",
      "reinstall_windows"
    ],
    "black_login": [
      "safe_mode",
      "reinstall_windows"
    ]
  },
  "display": {
    "abnormal_line": [],
    "flickering": [],
    "dim": [],
    "black": [],
    "color": [],
    "ghost": [],
    "dead": [],
    "bright": [],
    "garbage": []
  },
  "adapter_power": {
    "adapter": [],
    "cord": []
  },
  "charging": {
    "typec": [],
    "runtime": [
      "battery_report",
      "battery_health"
    ],
    "swollen": [],
    "slow_charge": [
      "battery_health"
    ],
    "not_detect": [
      "battery_health"
    ]
  },
  "port": {
    "usba": [],
    "usbc": [],
    "hdmi": [],
    "sd": [],
    "smart": []
  },
  "network": {
    "wifi": [],
    "lan": [],
    "bluetooth": [],
    "wwan": [],
    "sim": [],
    "smart_card_reader": []
  },
  "storage": {
    "ssd": [],
    "ssd_not_detect_windows_setup": [
      "reinstall_windows"
    ],
    "hdd": []
  },
  "audio": {
    "speaker_no": [],
    "speaker_noise": [],
    "jack": [],
    "mic": [],
    "echo": [],
    "low": [],
    "mic_low": []
  },
  "camera": {
    "not_work": [],
    "blurry": [],
    "face_recognition": [],
    "lock_on_leave": [
      "lock_on_leave"
    ]
  },
  "keyboard": {
    "few": [],
    "all": [],
    "backlight": [],
    "fn": [],
    "hotkey": [],
    "left_ctrl": [],
    "auto_type": []
  },
  "mouse": {
    "mouse_not_work": [],
    "wireless": [],
    "scroll": [],
    "click_l_double": []
  },
  "touchpad": {
    "cursor": [],
    "click": [],
    "jump": [],
    "track": []
  },
  "fan": {
    "fan_error": [],
    "fan_noise": [],
    "fan_spin_high": []
  },
  "bios": {
    "bios_pw": [
      "bios_password"
    ],
    "svp": [
      "bios_password"
    ]
  },
  "error": {
    "e0162": [],
    "e0188": [],
    "e0190": [],
    "e0271": [],
    "e1802": [],
    "e1962": [
      "reinstall_windows"
    ],
    "e2100": [],
    "e2101": [],
    "e2200": [],
    "e2201": [],
    "boot_missing": [
      "reinstall_windows"
    ],
    "pxe": []
  }
};
