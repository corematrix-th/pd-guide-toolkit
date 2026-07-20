const APP_OPTIONS = {
  "select": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test"
  ],
  "update_status": [
    "-- Select --",
    "Done",
    "Not Test"
  ],
  "detail_only": [
    "-- Select --"
  ],
  "detect": [
    "-- Select --",
    "Detect",
    "Not detect"
  ],
  "swap": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test"
  ],
  "yesno": [
    "-- Select --",
    "No",
    "Yes"
  ],
  "led": [
    "-- Select --",
    "No",
    "Yes",
    "Blink"
  ],
  "diag": [
    "-- Select --",
    "Failed",
    "Passed",
    "Not Test"
  ],
  "fan": [
    "-- Select --",
    "No Spin",
    "Spin",
    "Not Test"
  ],
  "mute": [
    "-- Select --",
    "Mute",
    "Unmute"
  ],
  "battery_health": [
    "-- Select --",
    "Good",
    "Fair",
    "Poor",
    "Replace Recommended",
    "Battery Not Detected",
    "Not Test"
  ],
  "battery_percent": [
    "-- Select --",
    "0%",
    "Over 10%",
    "Cross Mark"
  ],
  "typec_port": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test",
    "No Other Port"
  ],
  "shutter": [
    "-- Select --",
    "Open",
    "Closed",
    "No Shutter",
    "Not Test"
  ],
  "airplane": [
    "-- Select --",
    "Off",
    "On"
  ],
  "reboot_occurs": [
    "-- Select --",
    "Before Windows",
    "During Windows loading",
    "After Windows login",
    "Randomly",
    "Not Test"
  ],
  "bsod_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not Test"
  ],
  "task_manager_usage": [
    "-- Select --",
    "CPU High",
    "RAM High",
    "Disk High",
    "GPU High",
    "Normal",
    "Not Test"
  ],
  "freeze_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not Test"
  ],
  "onoff": [
    "-- Select --",
    "On",
    "Off",
    "Not Test"
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
    "Not Test"
  ],
  "temperature": [
    "-- Select --",
    "Overheat",
    "Normal",
    "Not Test"
  ],
  "fan_check": [
    "-- Select --",
    "Spin",
    "Not Spin"
  ],
  "power_mode": [
    "-- Select --",
    "Balanced",
    "High Performance",
    "Not Test"
  ],
  "yesno_test": [
    "-- Select --",
    "Yes",
    "No",
    "Not Test"
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
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Charge LED",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap other Type-C port",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Adapter test on other machine",
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
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "LED beside charging port",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Adapter test on other machine",
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
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Power Cable",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Power Outlet",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap PSU",
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
          ],
          "aio": [
            {
              "label": "Power LED",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Adapter / Power Cable",
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
        "defaultPart": "Mainboard",
        "questions": {
          "thinkpad": [
            {
              "label": "Power LED",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Caps Lock Toggle",
              "options": "yesno_test",
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
              "label": "Display Backlight",
              "options": "yesno_test",
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
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Caps Lock Toggle",
              "options": "yesno_test",
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
              "label": "Display Backlight",
              "options": "yesno_test",
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
          "desktop": [
            {
              "label": "Power LED",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Caps Lock Toggle",
              "options": "yesno_test",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap Monitor",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Swap HDMI / DisplayPort cable",
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
          "aio": [
            {
              "label": "Power LED",
              "options": "led",
              "text": false,
              "diag": false
            },
            {
              "label": "Fan Check",
              "options": "fan",
              "text": false,
              "diag": false
            },
            {
              "label": "Caps Lock Toggle",
              "options": "yesno_test",
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
              "label": "Display Backlight",
              "options": "yesno_test",
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
      "pond_beep": {
        "name": "Power on no display + Beep Sound",
        "defaultResult": "Dispatch",
        "defaultPart": "Mainboard / Memory",
        "common": [
          {
            "label": "Beep sound / pattern",
            "options": "yesno",
            "text": true,
            "diag": false
          },
          {
            "label": "Fan Check",
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
            "label": "Swap RAM",
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
            "label": "Can Access BIOS",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Can Access Safe Mode",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Run Lenovo Diagnostics",
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
            "label": "Can Access BIOS",
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
            "label": "Windows Recovery",
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
            "label": "Check Task Manager Usage",
            "options": "task_manager_usage"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Run Lenovo Diagnostics",
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
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Run Lenovo Diagnostics",
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
        "defaultPart": "Fan",
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
            "label": "Fan Check",
            "options": "fan",
            "text": false,
            "diag": false
          },
          {
            "label": "Run Lenovo Diagnostics",
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
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Event Viewer / Dump file collected",
            "options": "yesno"
          },
          {
            "label": "Swap RAM",
            "options": "swap"
          },
          {
            "label": "Swap SSD",
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
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Re-install Windows",
            "options": "select"
          },
          {
            "label": "Swap RAM",
            "options": "swap"
          },
          {
            "label": "Swap SSD",
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
            "label": "Check Fingerprint Device in Device Manager",
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
            "label": "Fingerprint Driver Update / Lenovo Vantage",
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
            "label": "Check Camera in Device Manager",
            "options": "select"
          },
          {
            "label": "Check Camera in Device Manager",
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
            "label": "Camera Driver Update / Lenovo Vantage",
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
            "label": "Safe Mode Test",
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
            "label": "Safe Mode Test",
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
            "label": "Swap RAM",
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
            "label": "Swap HDMI / DisplayPort cable",
            "options": "swap"
          },
          {
            "label": "Monitor test on other machine",
            "options": "swap"
          },
          {
            "label": "Swap Monitor",
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
            "options": "led"
          },
          {
            "label": "Swap Power Cord",
            "options": "swap"
          },
          {
            "label": "Swap Monitor",
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
            "label": "Swap Power Cord",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Adapter",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Adapter test on other machine",
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
        "name": "Power Cord",
        "defaultResult": "Dispatch",
        "defaultPart": "Power Cord",
        "common": [
          {
            "label": "Swap Power Cord",
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
        "name": "Can't Charge",
        "defaultResult": "Dispatch",
        "defaultPart": "Type-C Port / Mainboard",
        "common": [
          {
            "label": "Charge LED",
            "options": "led",
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
            "label": "Swap Adapter",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Adapter test on other machine",
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
            "label": "Swap Adapter",
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
            "label": "Swap Adapter",
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
            "label": "USB Mouse / Keyboard test",
            "options": "select"
          },
          {
            "label": "Swap USB Port",
            "options": "select"
          },
          {
            "label": "Swap USB Device",
            "options": "select"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "USB Driver Update / Lenovo Vantage",
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
            "label": "Swap USB-C Port",
            "options": "select"
          },
          {
            "label": "Check USB Error in Device Manager",
            "options": "yesno"
          },
          {
            "label": "Power Reset / Emergency Reset",
            "options": "select"
          },
          {
            "label": "USB Driver Update / Lenovo Vantage",
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
            "label": "Swap HDMI cable",
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
            "label": "Swap SD Card",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "SD Card test on other machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Check Card Reader in Device Manager",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "SD Card Reader Driver Update",
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
            "label": "Swap Smart Card",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Check Smart Card Reader in Device Manager",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Smart Card Driver Update",
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
              "options": "detail_only",
              "text": true,
              "diag": false
            },
            {
              "label": "USB Keyboard test",
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
              "options": "detail_only",
              "text": true,
              "diag": false
            },
            {
              "label": "USB Keyboard test",
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
              "options": "detail_only",
              "text": true,
              "diag": false
            },
            {
              "label": "Swap Keyboard",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test on other machine",
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
              "options": "detail_only",
              "text": true,
              "diag": false
            },
            {
              "label": "Swap Keyboard",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test on other machine",
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
              "label": "USB Keyboard test",
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
              "label": "USB Keyboard test",
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
              "label": "Swap Keyboard",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test on other machine",
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
              "label": "Swap Keyboard",
              "options": "swap",
              "text": false,
              "diag": false
            },
            {
              "label": "Keyboard test on other machine",
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
            "label": "USB Keyboard test",
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
            "label": "USB Keyboard test",
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
            "label": "Swap USB Port",
            "options": "select"
          },
          {
            "label": "Swap Mouse",
            "options": "select"
          },
          {
            "label": "Mouse test on other machine",
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
            "label": "Swap Battery",
            "options": "select"
          },
          {
            "label": "Swap Mouse",
            "options": "select"
          },
          {
            "label": "Swap USB Port",
            "options": "select"
          },
          {
            "label": "Mouse test on other machine",
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
            "label": "Mouse test on other machine",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Mouse",
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
            "label": "Swap App",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Mouse test on other machine",
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
            "label": "Swap Wi-Fi / Hotspot",
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
            "label": "Check Wireless Driver in Device Manager",
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
            "label": "WLAN Driver Update",
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
            "label": "Swap LAN cable",
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
            "label": "Check Bluetooth Device in Device Manager",
            "options": "yesno",
            "text": false,
            "diag": false
          },
          {
            "label": "Swap Bluetooth Device",
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
            "label": "Check WWAN Device in Device Manager",
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
            "label": "Swap SIM",
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
            "label": "Swap Smart Card",
            "options": "swap"
          },
          {
            "label": "Check Smart Card Reader in Device Manager",
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
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Swap SSD",
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
        "name": "SSD Not Found During Install OS",
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
            "label": "Re-install Windows USB recreated",
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
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "text": false,
            "diag": true
          },
          {
            "label": "Swap HDD",
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
            "label": "Volume Mixer checked",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Check Audio Device in Device Manager",
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
            "label": "Audio Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Headphone Test",
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
            "label": "Headphone Test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Audio Driver Update",
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
            "label": "Swap Headphone",
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
            "label": "Audio Driver Update",
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
            "label": "Voice Recorder Test",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Check Microphone in Device Manager",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Uninstall Microphone Driver and Restart",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Audio Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "External Mic Test",
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
            "label": "Audio Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "External Mic Test",
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
            "label": "Audio Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Headphone Test",
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
            "label": "Input volume level checked",
            "options": "select"
          },
          {
            "label": "Voice Recorder Test",
            "options": "swap"
          },
          {
            "label": "Uninstall Audio Driver and Restart",
            "options": "select"
          },
          {
            "label": "Audio Driver Update",
            "options": "select"
          },
          {
            "label": "External Mic Test",
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
            "label": "Check Camera in Device Manager",
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
            "label": "Check Camera in Device Manager",
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
            "label": "Camera Driver Update",
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
            "label": "Check Camera in Device Manager",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Camera Driver Update",
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
            "label": "Check Camera in Device Manager",
            "options": "select"
          },
          {
            "label": "Check Camera in Device Manager",
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
            "label": "Camera Driver Update / Lenovo Vantage",
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
            "label": "Check Camera in Device Manager",
            "options": "select"
          },
          {
            "label": "Check Camera in Device Manager",
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
            "label": "Mouse works",
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
            "label": "Mouse works",
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
            "label": "Mouse test",
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
            "label": "TrackPoint Driver Update",
            "options": "select",
            "text": false,
            "diag": false
          },
          {
            "label": "Mouse works",
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
        "defaultPart": "Fan",
        "common": [
          {
            "label": "Can Access Windows",
            "options": "yesno"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load BIOS Default",
            "options": "select"
          },
          {
            "label": "Run Lenovo Diagnostics",
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
      "fan_not_spin": {
        "name": "Fan Not Spin",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan",
        "common": [
          {
            "label": "Check Temperature",
            "options": "temperature"
          },
          {
            "label": "Check for Dust and Foreign Objects",
            "options": "yesno"
          },
          {
            "label": "Fan Check",
            "options": "fan_check"
          },
          {
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load BIOS Default",
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
        "name": "Fan Noise",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan",
        "common": [
          {
            "label": "Check Temperature",
            "options": "temperature"
          },
          {
            "label": "Check for Dust and Foreign Objects",
            "options": "yesno"
          },
          {
            "label": "Clean Cooling System",
            "options": "select"
          },
          {
            "label": "Check Power Mode",
            "options": "power_mode"
          },
          {
            "label": "Run Lenovo Diagnostics",
            "options": "diag",
            "diag": true
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load BIOS Default",
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
        "name": "Fan Spin High",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan",
        "common": [
          {
            "label": "Check Temperature",
            "options": "temperature"
          },
          {
            "label": "Check Task Manager Usage",
            "options": "task_manager_usage"
          },
          {
            "label": "Windows Update",
            "options": "select"
          },
          {
            "label": "Check Power Mode",
            "options": "power_mode"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load BIOS Default",
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
      "fan_overheat": {
        "name": "Fan Overheat",
        "defaultResult": "Dispatch",
        "defaultPart": "Fan",
        "common": [
          {
            "label": "Check Temperature",
            "options": "temperature"
          },
          {
            "label": "Check for Dust and Foreign Objects",
            "options": "yesno"
          },
          {
            "label": "Check Task Manager Usage",
            "options": "task_manager_usage"
          },
          {
            "label": "BIOS Update",
            "options": "select"
          },
          {
            "label": "Load BIOS Default",
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
  "dock": {
    "name": "Dock",
    "symptoms": {
      "usb_a_not_working": {
        "name": "USB-A",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap USB-A Port",
            "options": "swap"
          },
          {
            "label": "USB Mouse / Keyboard test",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "displayport_not_working": {
        "name": "DisplayPort",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap DisplayPort cable",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "hdmi_not_working": {
        "name": "HDMI",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap HDMI cable",
            "options": "swap"
          },
          {
            "label": "HDMI Port on notebook test",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "lan_not_working": {
        "name": "LAN",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Wi-Fi test",
            "options": "swap"
          },
          {
            "label": "Swap LAN cable",
            "options": "swap"
          },
          {
            "label": "LAN Port on notebook test",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "audio_jack_not_working": {
        "name": "Audio Jack",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap Headphone",
            "options": "swap"
          },
          {
            "label": "Audio Jack on notebook test",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "dock_not_charging": {
        "name": "Not Charging",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap Adapter",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "dock_not_detected": {
        "name": "Not Detected",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
      "external_monitor_flickering": {
        "name": "Monitor flickering",
        "defaultResult": "Escalate L2",
        "defaultPart": "Software Troubleshooting",
        "common": [
          {
            "label": "Swap HDMI / DisplayPort cable",
            "options": "swap"
          },
          {
            "label": "Swap USB-C cable",
            "options": "swap"
          },
          {
            "label": "Swap Dock",
            "options": "swap"
          },
          {
            "label": "Lenovo Vantage Update",
            "options": "select"
          },
          {
            "label": "Dock Firmware Update",
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
        "description": "BIOS Password เป็นรหัสผ่านที่ใช้ป้องกันการเข้าถึง BIOS หรือการใช้งานบางส่วนของระบบ หากไม่ทราบรหัสผ่าน จะไม่สามารถเข้าสู่ BIOS หรือดำเนินการตามสิทธิ์ที่กำหนดได้"
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
        "description": "Supervisor Password เป็นรหัสผ่านระดับผู้ดูแลสำหรับป้องกันการเปลี่ยนแปลงการตั้งค่า BIOS หากไม่ทราบรหัสผ่าน จะไม่สามารถแก้ไขการตั้งค่า BIOS ได้"
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
        "description": "BIOS ตรวจพบว่าค่าการตั้งค่าระบบ (BIOS Configuration) มีการเปลี่ยนแปลง หรือข้อมูลการตั้งค่าไม่ตรงกับที่บันทึกไว้ อาจเกิดหลังการอัปเดต BIOS, การรีเซ็ต BIOS หรือการเปลี่ยน CMOS Battery"
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
        "description": "BIOS ตรวจพบข้อมูล RFID Serialization ไม่ถูกต้องหรือสูญหาย ซึ่งอาจเกิดจากการเปลี่ยน Mainboard หรือข้อมูลระบบไม่สมบูรณ์"
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
            "label": "Swap Adapter",
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
        "description": "แบตเตอรี่มีระดับพลังงานต่ำจนระบบไม่สามารถเริ่มต้นหรือดำเนินการต่อได้ มักเกี่ยวข้องกับสถานะแบตเตอรี่ การชาร์จ หรืออุปกรณ์จ่ายไฟ"
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
        "description": "วันที่และเวลาของระบบไม่ถูกต้อง มักเกิดจากค่า BIOS ถูกรีเซ็ต, CMOS/RTC Battery อ่อน หรือไม่ได้ตั้งค่าวันที่และเวลาใหม่"
      },
      "e1802": {
        "name": "Error 1802 : Unauthorized network card is plugged in",
        "defaultResult": "Escalate L2",
        "defaultPart": "Wireless Card / Mainboard",
        "description": "BIOS ตรวจพบอุปกรณ์เครือข่ายไร้สายที่ไม่รองรับหรือไม่ได้รับอนุญาตให้ใช้งานกับเครื่องรุ่นนี้ อาจเกิดหลังมีการเปลี่ยน WLAN/WWAN Card",
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
        "description": "BIOS ไม่พบระบบปฏิบัติการที่สามารถบูตได้ อาจเกิดจากลำดับการบูตไม่ถูกต้อง หรืออุปกรณ์จัดเก็บข้อมูลไม่พร้อมใช้งาน",
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
            "label": "Re-install Windows",
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
            "label": "Swap SSD / HDD",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Run Lenovo Diagnostics",
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
        "description": "BIOS ไม่สามารถตรวจพบอุปกรณ์จัดเก็บข้อมูล หรือการสื่อสารกับ Storage Device ล้มเหลว อาจเกี่ยวข้องกับ SSD/HDD หรือการเชื่อมต่อภายในเครื่อง"
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
            "label": "Swap HDD",
            "options": "swap",
            "text": false,
            "diag": false
          },
          {
            "label": "Run Lenovo Diagnostics",
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
        "description": "BIOS ตรวจพบปัญหาการสื่อสารกับ HDD หรือไม่สามารถตรวจพบ HDD ได้ตามปกติ อาจเกี่ยวข้องกับตัว HDD หรือการเชื่อมต่อ"
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
        "description": "ข้อมูล Machine Type หรือ Serial Number ใน BIOS ไม่ถูกต้อง สูญหาย หรือไม่ตรงกับข้อมูลของเครื่อง มักเกี่ยวข้องกับข้อมูลระบบใน Mainboard"
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
        "description": "ข้อมูล UUID ของเครื่องไม่ถูกต้อง สูญหาย หรือไม่ได้ถูกบันทึกใน BIOS อย่างสมบูรณ์ มักเกี่ยวข้องกับข้อมูลระบบใน Mainboard"
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
        "description": "ระบบไม่พบอุปกรณ์ที่สามารถใช้บูตเข้าสู่ระบบปฏิบัติการได้ อาจเกิดจาก Storage ไม่ถูกตรวจพบ หรือลำดับการบูตไม่ถูกต้อง"
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
        "description": "เครื่องพยายามบูตผ่านระบบเครือข่าย (PXE) เพราะไม่พบอุปกรณ์หรือระบบปฏิบัติการที่สามารถบูตได้ในลำดับการบูตปัจจุบัน"
      }
    }
  },
  "manual": {
    "name": "Troubleshooting Guide",
    "manual": true,
    "symptoms": {
      "vantage_update": {
        "name": "Lenovo Vantage Update",
        "guide": "วิธีอัปเดต Driver ผ่าน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ System Update\n3. กด Check for updates\n4. ติดตั้งรายการที่พบ และ Restart เครื่อง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบอัปเดต Driver ผ่าน Lenovo Vantage ตามขั้นตอนด้านล่าง\n\n1. เปิด Lenovo Vantage\n2. ไปที่ System Update\n3. กด Check for updates\n4. ติดตั้งรายการที่พบ และ Restart เครื่อง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบอาการอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease update the drivers through Lenovo Vantage.\n\n1. Open Lenovo Vantage.\n2. Go to System Update.\n3. Click Check for updates.\n4. Install all available updates and restart the machine.\n\nOnce completed, please test the issue again and provide the result back to us."
      },
      "lenovo_diagnostics": {
        "name": "Lenovo Diagnostics",
        "guide": "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\n\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO\n\n1. เปิดเครื่องและกด F10 รัว ๆ\n2. เลือก Run All\n3. เลือก Quick\n4. เลือก Quick Unattended\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed\n\nสำหรับ IdeaPad\n\n1. กด Novo Button\n2. เลือก UEFI Diagnostics\n3. เลือก Run All\n4. เลือก Quick\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบ Run Diagnostics ตามขั้นตอนด้านล่าง\n\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO\n\n1. เปิดเครื่องและกด F10 รัว ๆ\n\n2. เลือก Run All\n\n3. เลือก Quick\n\n4. เลือก Quick Unattended\n\n5. รอจนการทดสอบเสร็จสิ้น\n\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed\n\nสำหรับ IdeaPad\n\n1. กด Novo Button\n\n2. เลือก UEFI Diagnostics\n\n3. เลือก Run All\n\n4. เลือก Quick\n\n5. รอจนการทดสอบเสร็จสิ้น\n\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease run Lenovo Diagnostics and provide the result as Pass or Failed."
      },
      "battery_report": {
        "name": "Battery Report",
        "guide": "วิธีดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC → Drive C → Windows → System32 และหาชื่อไฟล์ battery-report.html\n\nสิ่งที่ต้องส่งกลับ\n• battery-report.html",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่างเพื่อดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC → Drive C → Windows → System32 และหาชื่อไฟล์ battery-report.html\n\nเมื่อดำเนินการเรียบร้อยแล้ว รบกวนส่งไฟล์ battery-report.html กลับมา เพื่อให้ทางเราตรวจสอบเพิ่มเติมครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below to generate the Battery Report.\n\n1. Open Command Prompt or CMD.\n2. Type the command: powercfg /batteryreport\n3. Open This PC → Drive C → Windows → System32 and locate battery-report.html.\n\nOnce completed, please send the file back to us for further checking."
      },
      "battery_health": {
        "name": "Battery Health",
        "guide": "วิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device → Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device → Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device → Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nOnce completed, please provide the result back to us."
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
        "guide": "วิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System → Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System → Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System → Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nOnce completed, please provide the result back to us."
      },
      "reset_pc": {
        "name": "Reset This PC",
        "guide": "Reset This PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset This PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือวงกลมกำลังโหลดของ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. ทำซ้ำประมาณ 3 ครั้ง\n3. ครั้งที่ 4 เครื่องจะเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)\n4. เลือก Troubleshoot\n5. เลือก Reset This PC\n6. เลือก Keep my files หรือ Remove everything\n7. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nReset This PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset This PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือวงกลมกำลังโหลดของ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. ทำซ้ำประมาณ 3 ครั้ง\n3. ครั้งที่ 4 เครื่องจะเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)\n4. เลือก Troubleshoot\n5. เลือก Reset This PC\n6. เลือก Keep my files หรือ Remove everything\n7. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nReset This PC\n\nกรณีเข้า Windows ได้\n\n1. ไปที่ Settings\n2. เลือก System\n3. เลือก Recovery\n4. เลือก Reset This PC\n5. เลือก Keep my files หรือ Remove everything\n6. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nกรณีเข้า Windows ไม่ได้\n\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือวงกลมกำลังโหลดของ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. ทำซ้ำประมาณ 3 ครั้ง\n3. ครั้งที่ 4 เครื่องจะเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)\n4. เลือก Troubleshoot\n5. เลือก Reset This PC\n6. เลือก Keep my files หรือ Remove everything\n7. ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น\n\nOnce completed, please provide the result back to us."
      },

      "startup_repair": {
        "name": "Startup Repair",
        "guide": "Startup Repair\n\nวัตถุประสงค์\nซ่อมแซมปัญหาที่ทำให้ Windows ไม่สามารถเริ่มต้นระบบได้\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\nขั้นตอน\n1. เลือก Troubleshoot\n2. เลือก Advanced options\n3. เลือก Startup Repair\n4. เลือกระบบปฏิบัติการ (ถ้ามี)\n5. รอให้ระบบตรวจสอบและซ่อมแซม\n6. ตรวจสอบว่าสามารถเข้าสู่ Windows ได้ตามปกติหรือไม่",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Startup Repair ตามขั้นตอนด้านล่าง\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\n1. เลือก Troubleshoot\n\n2. เลือก Advanced options\n\n3. เลือก Startup Repair\n\n4. เลือกระบบปฏิบัติการ (ถ้ามี)\n\n5. รอให้ระบบตรวจสอบและซ่อมแซม\n\n6. ตรวจสอบว่าสามารถเข้าสู่ Windows ได้ตามปกติหรือไม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Startup Repair by following the steps below.\n\nIf Windows cannot boot, power on the machine. When the Lenovo or Windows logo appears, press and hold the Power button to turn it off. Turn it on again and repeat this about 3 times until Preparing Automatic Repair appears, then select Advanced options.\n\n1. Select Troubleshoot.\n\n2. Select Advanced options.\n\n3. Select Startup Repair.\n\n4. Select the operating system if prompted.\n\n5. Wait for the repair process to complete.\n\n6. Check whether Windows can boot normally.\n\nOnce completed, please provide the result back to us."
      },
      "system_restore": {
        "name": "System Restore",
        "guide": "System Restore\n\nวัตถุประสงค์\nย้อนกลับการตั้งค่าระบบไปยัง Restore Point ที่สร้างไว้ก่อนเกิดปัญหา โดยไม่กระทบไฟล์ส่วนตัว\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\nขั้นตอน\n1. เลือก Troubleshoot\n2. เลือก Advanced options\n3. เลือก System Restore\n4. เลือก Restore Point ที่ต้องการ\n5. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n6. ตรวจสอบว่าอาการผิดปกติได้รับการแก้ไขหรือไม่",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ System Restore ตามขั้นตอนด้านล่าง\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\n1. เลือก Troubleshoot\n\n2. เลือก Advanced options\n\n3. เลือก System Restore\n\n4. เลือก Restore Point ที่ต้องการ\n\n5. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n\n6. ตรวจสอบว่าอาการผิดปกติได้รับการแก้ไขหรือไม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform System Restore by following the steps below.\n\nIf Windows cannot boot, power on the machine. When the Lenovo or Windows logo appears, press and hold the Power button to turn it off. Turn it on again and repeat this about 3 times until Preparing Automatic Repair appears, then select Advanced options.\n\n1. Select Troubleshoot.\n\n2. Select Advanced options.\n\n3. Select System Restore.\n\n4. Select a restore point.\n\n5. Follow the on-screen instructions until completion.\n\n6. Check whether the issue is resolved.\n\nOnce completed, please provide the result back to us."
      },
      "uninstall_updates": {
        "name": "Uninstall Windows Update",
        "guide": "Uninstall Windows Update\n\nวัตถุประสงค์\nถอนการติดตั้ง Windows Update ล่าสุด หากปัญหาเกิดขึ้นหลังจากอัปเดตระบบ\n\nกรณีเข้า Windows ได้\n1. กด Win + I เพื่อเปิด Settings\n2. ไปที่ Windows Update\n3. เลือก Update history\n4. เลื่อนลงด้านล่าง และเลือก Uninstall updates\n5. เลือก Update ล่าสุด หรือ KB ที่คาดว่าเกี่ยวข้องกับปัญหา\n6. กด Uninstall\n7. Restart เครื่อง\n8. ตรวจสอบอาการอีกครั้ง\n\nหมายเหตุ: หากถอนผ่าน Settings ไม่ได้ ให้เปิด Control Panel → Programs and Features → View installed updates แล้วถอน KB ล่าสุดแทน\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. เปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง จนเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)\n3. เลือก Troubleshoot\n4. เลือก Advanced options\n5. เลือก Uninstall Updates\n6. เลือก Uninstall latest Quality Update หรือ Uninstall latest Feature Update\n7. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n8. Restart เครื่อง และตรวจสอบอาการอีกครั้ง",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Uninstall Windows Update ตามขั้นตอนด้านล่าง\n\nกรณีเข้า Windows ได้\n1. กด Win + I เพื่อเปิด Settings\n2. ไปที่ Windows Update\n3. เลือก Update history\n4. เลือก Uninstall updates\n5. เลือก Update ล่าสุด หรือ KB ที่คาดว่าเกี่ยวข้องกับปัญหา\n6. กด Uninstall และ Restart เครื่อง\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. เปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง จนเข้าสู่ Preparing Automatic Repair / WinRE\n3. เลือก Troubleshoot\n4. เลือก Advanced options\n5. เลือก Uninstall Updates\n6. เลือก Uninstall latest Quality Update หรือ Uninstall latest Feature Update\n7. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n8. Restart เครื่อง และตรวจสอบอาการอีกครั้ง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease uninstall the latest Windows Update by following the steps below.\n\nIf Windows can boot:\n1. Press Win + I to open Settings.\n2. Go to Windows Update.\n3. Select Update history.\n4. Select Uninstall updates.\n5. Select the latest update or the KB that may be related to the issue.\n6. Click Uninstall, then restart the machine.\n\nIf Windows cannot boot:\n1. Power on the machine. When the Lenovo or Windows logo appears, press and hold the Power button to turn it off.\n2. Turn it on again and repeat this about 3 times until Preparing Automatic Repair / WinRE appears.\n3. Select Troubleshoot.\n4. Select Advanced options.\n5. Select Uninstall Updates.\n6. Select Uninstall latest Quality Update or Uninstall latest Feature Update.\n7. Follow the on-screen instructions until completion.\n8. Restart the machine and check the issue again.\n\nOnce completed, please provide the result back to us."
      },
      "reinstall_windows": {
        "name": "Re-install Windows",
        "guide": "วิธีติดตั้ง Windows\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security → Secure Boot → Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการติดตั้ง Windows ตามขั้นตอนด้านล่าง\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security → Secure Boot → Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบอาการอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Windows installation by following the steps below.\n\n1. Download Windows from Microsoft:\nhttps://www.microsoft.com/en-us/software-download/windows11\n\n2. Video guide for creating a USB Installer:\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. After the USB Installer is created:\n• Enter BIOS by repeatedly pressing F1 after powering on the machine.\n• Go to Security → Secure Boot → Disable.\n• Press F10 and select Yes.\nAfter the screen turns off, repeatedly press F12 to enter the Boot Menu.\n• Select the USB device.\n• Then continue following the on-screen instructions.\n\nOnce completed, please test the issue again and provide the result back to us."
      },
      "event_viewer": {
        "name": "Event Viewer",
        "guide": "วิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs → System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs → System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs → System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ\n\nOnce completed, please provide the result back to us."
      },
      "sfc": {
        "name": "SFC /scannow",
        "guide": "วิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
      },
      "safe_mode": {
        "name": "Safe Mode",
        "guide": "วิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings → Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings → Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings → Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
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
        "guide": "วิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account → Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account → Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account → Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nOnce completed, please provide the result back to us."
      },
      "windows11_bypass": {
        "name": "Bypass Windows 11 OOBE",
        "guide": "วิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
      },
      "always_on_usb": {
        "name": "Always On USB",
        "guide": "วิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config → USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config → USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config → USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
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
      "reset_battery": {
        "name": "Reset Battery",
        "guide": "Reset Battery เพื่อยืดอายุการใช้งาน\n\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Power\n3. ค้นหาหัวข้อ Battery Gauge Reset\n4. เสียบสายชาร์จไว้ระหว่างทำ Reset\n5. กด Reset และรอให้ระบบทำงานจนเสร็จ\n\nระบบจะดำเนินการอัตโนมัติ\n1. ชาร์จแบตเตอรี่จนถึง 100%\n2. ปล่อยแบตเตอรี่ลงจนเกือบ 0%\n3. ชาร์จกลับขึ้นมา 100%\n\nใช้เวลาประมาณ 4–8 ชั่วโมง\nแนะนำให้ทำช่วงกลางวัน หรือช่วงกลางคืนโดยเปิดเครื่องทิ้งไว้",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Reset Battery ตามขั้นตอนด้านล่าง\n\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Power\n3. ค้นหาหัวข้อ Battery Gauge Reset\n4. เสียบสายชาร์จไว้ระหว่างทำ Reset\n5. กด Reset และรอให้ระบบทำงานจนเสร็จ\n\nกระบวนการจะใช้เวลาประมาณ 4–8 ชั่วโมง โดยระบบจะชาร์จแบตเตอรี่ 100% จากนั้นปล่อยแบตเตอรี่ลงเกือบ 0% และชาร์จกลับขึ้นมา 100%\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Battery Gauge Reset by following the steps below.\n\n1. Open Lenovo Commercial Vantage or Lenovo Vantage.\n2. Go to Device → Power.\n3. Find Battery Gauge Reset.\n4. Keep the AC adapter connected during the reset.\n5. Click Reset and wait until the process is completed.\n\nThe process may take approximately 4–8 hours.\n\nOnce completed, please provide the result back to us."
      },
      "lcd_self_test": {
        "name": "LCD Self-Test",
        "guide": "LCD Self-Test\n\nMethod 1\n1. ถอดอุปกรณ์ภายนอกทั้งหมด\n2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที\n3. กด Fn + Left Ctrl ค้างไว้\n4. ระหว่างกดค้าง ให้กดปุ่ม Power\n5. เครื่องจะเข้าสู่ LCD Self-Test\n\nMethod 2\n1. เปิดเครื่องและกด F10 ย้ำ ๆ\n2. เข้า Lenovo Diagnostics\n3. เลือก Run Test\n4. เลือกหัวข้อ Display",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบ LCD Self-Test ตามขั้นตอนด้านล่าง\n\nMethod 1\n1. ถอดอุปกรณ์ภายนอกทั้งหมด\n2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที\n3. กด Fn + Left Ctrl ค้างไว้\n4. ระหว่างกดค้าง ให้กดปุ่ม Power\n5. เครื่องจะเข้าสู่ LCD Self-Test\n\nMethod 2\n1. เปิดเครื่องและกด F10 ย้ำ ๆ\n2. เข้า Lenovo Diagnostics\n3. เลือก Run Test\n4. เลือกหัวข้อ Display\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform LCD Self-Test by following the steps below.\n\nMethod 1\n1. Disconnect all external devices.\n2. Press and hold the Power button for 10–15 seconds to clear residual power.\n3. Press and hold Fn + Left Ctrl.\n4. While holding the keys, press the Power button.\n5. The system will enter LCD Self-Test.\n\nMethod 2\n1. Power on the machine and press F10 repeatedly.\n2. Enter Lenovo Diagnostics.\n3. Select Run Test.\n4. Select Display.\n\nOnce completed, please provide the result back to us."
      },
      "disable_audio_enhancements": {
        "name": "Disable Audio Enhancements",
        "guide": "Disable Audio Enhancements\n\nMethod 1: Windows Settings\n1. เปิด Settings → System → Sound\n2. เลือก Microphone ที่ใช้งาน\n3. ไปที่ Advanced → Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel → Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก Microphone ที่ใช้งาน\n4. ไปที่ Advanced → Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยปิด Audio Enhancements ของ Microphone ตามขั้นตอนด้านล่าง\n\nMethod 1: Windows Settings\n1. เปิด Settings → System → Sound\n2. เลือก Microphone ที่ใช้งาน\n3. ไปที่ Advanced → Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel → Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก Microphone ที่ใช้งาน\n4. ไปที่ Advanced → Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease disable Audio Enhancements for the microphone by following the steps below.\n\nMethod 1: Windows Settings\n1. Open Settings → System → Sound.\n2. Select the microphone in use.\n3. Go to Advanced → Signal.\n4. Uncheck Enable audio enhancements.\n5. Click Apply and OK.\n\nMethod 2: Control Panel\n1. Open Control Panel → Sound.\n2. Go to the Recording tab.\n3. Double-click the microphone in use.\n4. Go to Advanced → Signal.\n5. Uncheck Enable audio enhancements.\n6. Click Apply and OK.\n\nOnce completed, please test again and provide the result back to us."
      },
      "disable_audio_enhancements_external_mic": {
        "name": "Disable Audio Enhancements (External Microphone)",
        "guide": "Disable Audio Enhancements (External Microphone)\n\nMethod 1: Windows Settings\n1. เปิด Settings → System → Sound\n2. เลือก External Microphone\n3. ไปที่ Advanced → Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel → Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก External Microphone\n4. ไปที่ Advanced → Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยปิด Audio Enhancements ของ External Microphone ตามขั้นตอนด้านล่าง\n\nMethod 1: Windows Settings\n1. เปิด Settings → System → Sound\n2. เลือก External Microphone\n3. ไปที่ Advanced → Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel → Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก External Microphone\n4. ไปที่ Advanced → Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบไมโครโฟนอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease disable Audio Enhancements for the External Microphone by following the steps below.\n\nMethod 1: Windows Settings\n1. Open Settings → System → Sound.\n2. Select External Microphone.\n3. Go to Advanced → Signal.\n4. Uncheck Enable audio enhancements.\n5. Click Apply and OK.\n\nMethod 2: Control Panel\n1. Open Control Panel → Sound.\n2. Go to the Recording tab.\n3. Double-click External Microphone.\n4. Go to Advanced → Signal.\n5. Uncheck Enable audio enhancements.\n6. Click Apply and OK.\n\nOnce completed, please test the microphone again and provide the result back to us."
      },
      "thinkcentre_raid1_ssd_not_found_os_install": {
        "name": "SSD Not Found During Install OS",
        "guide": "SSD Not Found During Install OS\n\nอาการ\n- Windows Setup ไม่พบ SSD\n- ขึ้นข้อความ \"No drives were found.\"\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ตรวจสอบการตั้งค่า Storage Controller ใน BIOS\nตรวจสอบโหมดการทำงานของ Storage Controller ให้ตรงกับรุ่นเครื่อง เช่น\n- AHCI\n- Intel VMD\n- Intel RST / RAID\n\n3. ดาวน์โหลด Intel RST / Storage Driver\nโดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n4. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ \"Where do you want to install Windows?\" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nSSD Not Found During Install OS\n\nอาการ\n- Windows Setup ไม่พบ SSD\n- ขึ้นข้อความ \"No drives were found.\"\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ตรวจสอบการตั้งค่า Storage Controller ใน BIOS\nตรวจสอบโหมดการทำงานของ Storage Controller ให้ตรงกับรุ่นเครื่อง เช่น\n- AHCI\n- Intel VMD\n- Intel RST / RAID\n\n3. ดาวน์โหลด Intel RST / Storage Driver\nโดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n4. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ \"Where do you want to install Windows?\" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the guide below.\n\nSSD Not Found During Install OS\n\nSymptoms\n- Windows Setup cannot detect the SSD.\n- The message \"No drives were found.\" appears.\n\nTroubleshooting\n\n1. Verify whether the SSD is detected in BIOS.\n- Enter BIOS and check whether the SSD is detected.\n- If BIOS does not detect the SSD, follow the SSD Not Detected troubleshooting guide.\n\n2. Check the Storage Controller setting in BIOS.\nVerify that the Storage Controller mode matches the machine platform, such as AHCI, Intel VMD, or Intel RST / RAID.\n\n3. Download Intel RST / Storage Driver by using another PC.\n- Go to Lenovo Support.\n- Download the Intel RST / Storage Driver that matches the machine model.\n- Extract the downloaded package.\n- Copy the extracted driver files to a USB Flash Drive.\n\n4. Load the driver during Windows Setup.\n- On the \"Where do you want to install Windows?\" screen, select Load driver.\n- Browse to the USB Flash Drive.\n- Select the Intel RST / Storage Driver.\n- After the driver loads successfully, verify whether the SSD appears.\n\nOnce completed, please provide the result back to us."
      },
      "fn_ctrl_key_swap": {
        "name": "Fn & Ctrl Key Swap",
        "guide": "Fn & Ctrl Key Swap\n\nMethod 1: Lenovo Vantage\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Input & Accessories → Keyboard\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. หากเปิดใช้งานอยู่ ให้ปิด Off\n5. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nMethod 2: BIOS\n1. เข้า BIOS\n2. ไปที่ Config → Keyboard/Mouse\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. ตั้งค่าเป็น Disabled\n5. กด F10 เพื่อ Save and Exit\n6. ทดสอบปุ่ม Left Ctrl อีกครั้ง",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยตรวจสอบ Fn & Ctrl Key Swap ตามขั้นตอนด้านล่าง\n\nMethod 1: Lenovo Vantage\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Input & Accessories → Keyboard\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. หากเปิดใช้งานอยู่ ให้ปิด Off\n5. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nMethod 2: BIOS\n1. เข้า BIOS\n2. ไปที่ Config → Keyboard/Mouse\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. ตั้งค่าเป็น Disabled\n5. กด F10 เพื่อ Save and Exit\n6. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease check Fn & Ctrl Key Swap by following the steps below.\n\nMethod 1: Lenovo Vantage\n1. Open Lenovo Commercial Vantage or Lenovo Vantage.\n2. Go to Device → Input & Accessories → Keyboard.\n3. Check Fn and Ctrl Key Swap.\n4. If it is enabled, turn it Off.\n5. Test the Left Ctrl key again.\n\nMethod 2: BIOS\n1. Enter BIOS.\n2. Go to Config → Keyboard/Mouse.\n3. Check Fn and Ctrl Key Swap.\n4. Set it to Disabled.\n5. Press F10 to Save and Exit.\n6. Test the Left Ctrl key again.\n\nOnce completed, please provide the result back to us."
      },
      "downgrade_bios": {
        "name": "Downgrade BIOS",
        "guide": "Downgrade BIOS\n\nวัตถุประสงค์\nดาวน์โหลด BIOS Version ก่อนหน้าเพื่อนำไปใช้ Downgrade BIOS ตามความเหมาะสมของเคส\n\nขั้นตอนดาวน์โหลด BIOS Version ก่อนหน้า\n1. เปิดหน้า Driver ของ Lenovo Support ตามรุ่นเครื่อง\n2. ไปที่หัวข้อ BIOS/UEFI\n3. กด Details ของ BIOS ล่าสุด\n4. ที่ปุ่ม Download ให้คลิกขวา แล้วเลือก Copy link address หรือ Copy link\n5. เปิดไฟล์ README ของ BIOS รุ่นล่าสุด\n6. ใน README ให้หาหัวข้อ Version Information หรือหัวข้อที่แสดงรายการ BIOS Version ก่อนหน้า\n7. หา Package ID หรือชื่อไฟล์ BIOS Version ก่อนหน้าที่ต้องการ เช่น r26uj15w\n8. Copy ชื่อ Package ID นั้นไว้\n9. เปิด Tab ใหม่ แล้ววาง Link ที่ Copy มาจากปุ่ม Download\n10. แก้เฉพาะชื่อไฟล์ BIOS ท้าย Link ให้เป็น Package ID ของ Version ก่อนหน้า\n11. เติม .exe ต่อท้ายชื่อไฟล์ หากยังไม่มีนามสกุลไฟล์\n12. กด Enter เพื่อดาวน์โหลด\n\nตัวอย่าง\nLink ล่าสุด: https://download.lenovo.com/pccbbs/mobiles/r26uj16w.exe\nPackage ID จาก README: r26uj15w\nLink ที่แก้แล้ว: https://download.lenovo.com/pccbbs/mobiles/r26uj15w.exe\n\nหมายเหตุ\n- ต้องใช้ Package ID / ชื่อไฟล์จาก README ให้ถูกต้อง\n- วิธีนี้ใช้ได้เฉพาะไฟล์ BIOS ที่ Lenovo ยังเก็บอยู่บน Server\n- ก่อน Downgrade ให้ตรวจสอบ AC Adapter, Battery, BitLocker, และ BIOS Back Flash / Flash Back Prevention ตามรุ่นเครื่อง\n- หลัง Downgrade BIOS ควร Load BIOS Default และ Restart เครื่องอีกครั้ง",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Downgrade BIOS ตามขั้นตอนด้านล่าง\n\n1. เปิดหน้า Driver ของ Lenovo Support ตามรุ่นเครื่อง\n2. ไปที่หัวข้อ BIOS/UEFI\n3. กด Details ของ BIOS ล่าสุด\n4. ที่ปุ่ม Download ให้คลิกขวา แล้วเลือก Copy link address หรือ Copy link\n5. เปิดไฟล์ README ของ BIOS รุ่นล่าสุด\n6. ค้นหา Version Information หรือรายการ BIOS Version ก่อนหน้า\n7. Copy Package ID / ชื่อไฟล์ BIOS Version ก่อนหน้าที่ต้องการ\n8. เปิด Tab ใหม่ แล้ววาง Link ที่ Copy มา\n9. แก้ชื่อไฟล์ BIOS ท้าย Link ให้เป็น Package ID ของ Version ก่อนหน้า\n10. เติม .exe ต่อท้ายชื่อไฟล์ หากยังไม่มีนามสกุลไฟล์\n11. กด Enter เพื่อดาวน์โหลดและดำเนินการตามขั้นตอน BIOS Update/Downgrade\n\nหมายเหตุ: ใช้ได้เฉพาะไฟล์ BIOS ที่ Lenovo ยังเก็บอยู่บน Server และควรตรวจสอบ BitLocker / BIOS Back Flash ก่อนดำเนินการ\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the Downgrade BIOS guide below.\n\n1. Open the Lenovo Support driver page for the machine model.\n2. Go to BIOS/UEFI.\n3. Open Details for the latest BIOS package.\n4. Right-click the Download button and select Copy link address or Copy link.\n5. Open the README file for the latest BIOS package.\n6. Find Version Information or the previous BIOS version list.\n7. Copy the Package ID / BIOS file name for the previous BIOS version.\n8. Open a new tab and paste the copied Download link.\n9. Change only the BIOS file name at the end of the link to the previous Package ID.\n10. Add .exe at the end if the file extension is missing.\n11. Press Enter to download and proceed with the BIOS downgrade process.\n\nNote: This works only if Lenovo still keeps that BIOS file on the server. Please also check BitLocker and BIOS Back Flash / Flash Back Prevention before proceeding.\n\nOnce completed, please provide the result back to us."
      },
      "emergency_reset": {
        "name": "Emergency Reset",
        "guide": "วิธีทำ Emergency Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบ Emergency Reset ตามขั้นตอนด้านล่าง\n\n1. ถอด Adapter ออกจากเครื่อง\n2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nหลังจากดำเนินการแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Emergency Reset by following the steps below.\n\n1. Disconnect the Adapter.\n2. Use a paper clip to press and hold the Emergency Reset hole for about 5–10 seconds.\n3. Reconnect the Adapter.\n4. Power on the machine and test the issue again.\n\nOnce completed, please provide the result back to us."
      },
      "power_reset": {
        "name": "Power Reset",
        "guide": "วิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
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
      "safe_mode",
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
    "abnormal_line": [
      "lcd_self_test"
    ],
    "flickering": [
      "lcd_self_test"
    ],
    "dim": [
      "lcd_self_test"
    ],
    "black": [
      "lcd_self_test"
    ],
    "color": [
      "lcd_self_test"
    ],
    "ghost": [
      "lcd_self_test"
    ],
    "dead": [
      "lcd_self_test"
    ],
    "bright": [
      "lcd_self_test"
    ],
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
      "battery_health",
      "reset_battery"
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
      "reinstall_windows",
      "thinkcentre_raid1_ssd_not_found_os_install"
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
    "mic_low": [
      "disable_audio_enhancements_external_mic"
    ]
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
    "left_ctrl": [
      "fn_ctrl_key_swap"
    ],
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
  "dock": {
    "usb_a_not_working": [
      "lenovo_vantage_update"
    ],
    "displayport_not_working": [
      "lenovo_vantage_update"
    ],
    "hdmi_not_working": [
      "lenovo_vantage_update"
    ],
    "lan_not_working": [
      "lenovo_vantage_update"
    ],
    "audio_jack_not_working": [
      "lenovo_vantage_update"
    ],
    "dock_not_charging": [
      "lenovo_vantage_update"
    ],
    "dock_not_detected": [
      "lenovo_vantage_update"
    ],
    "external_monitor_flickering": [
      "lenovo_vantage_update"
    ]
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


// v4.8.6 Alias Symptom Rule
// Port > Can't Charge is an alias of Battery > Can't Charge because agents often search by Port/Type-C.
// Checklist, email and dispatch logic are shared from the same source symptom.
if(LEVELS.charging && LEVELS.charging.symptoms && LEVELS.charging.symptoms.typec && LEVELS.port && LEVELS.port.symptoms){
  const portNotCharge = {
    ...LEVELS.charging.symptoms.typec,
    name: "Can't Charge",
    aliasOf: "Battery → Can't Charge"
  };
  LEVELS.port.symptoms = {
    not_charge: portNotCharge,
    ...LEVELS.port.symptoms
  };
}


// v4.9.1 Model Structure Reference
// The Level 1 and Symptom order is controlled by the 5 Reference_Text files.
// Existing checklist logic is reused. New symptoms clone the closest existing checklist and keep dispatch rules unchanged.
function cloneSymptom(sourceLevel, sourceSymptom, newName){
  const src = LEVELS[sourceLevel] && LEVELS[sourceLevel].symptoms && LEVELS[sourceLevel].symptoms[sourceSymptom];
  if(!src) return { name: newName, common: [] };
  return { ...src, name: newName };
}
function ensureSymptom(levelKey, symptomKey, sourceLevel, sourceSymptom, newName){
  if(!LEVELS[levelKey]) return;
  if(!LEVELS[levelKey].symptoms) LEVELS[levelKey].symptoms = {};
  if(!LEVELS[levelKey].symptoms[symptomKey]) LEVELS[levelKey].symptoms[symptomKey] = cloneSymptom(sourceLevel, sourceSymptom, newName);
  LEVELS[levelKey].symptoms[symptomKey].name = newName;
}
function ensureLevel(levelKey, levelName){
  if(!LEVELS[levelKey]) LEVELS[levelKey] = { name: levelName, symptoms: {} };
  LEVELS[levelKey].name = levelName;
  if(!LEVELS[levelKey].symptoms) LEVELS[levelKey].symptoms = {};
}

// Standardize Beep wording: do not use legacy Beep wording in v4.9.1+.
if(LEVELS.boot && LEVELS.boot.symptoms && LEVELS.boot.symptoms.pond_beep){
  LEVELS.boot.symptoms.pond_beep.name = "Power on no display + Beep Sound";
}

// New / expanded symptoms required by the 5 model reference files.
ensureSymptom('display', 'touchscreen', 'display', 'black', 'Touchscreen not work');
ensureSymptom('monitor', 'flickering', 'display', 'flickering', 'Flickering');
ensureSymptom('port', 'usbc_thunderbolt', 'port', 'usbc', 'USB-C Thunderbolt');
ensureSymptom('port', 'usbc_display', 'port', 'hdmi', 'USB-C Display');
ensureSymptom('port', 'displayport', 'port', 'hdmi', 'DisplayPort');
ensureSymptom('port', 'vga', 'port', 'hdmi', 'VGA');
ensureSymptom('port', 'serial', 'port', 'usba', 'Serial Port');
ensureSymptom('port', 'hdmi_in', 'port', 'hdmi', 'HDMI In');
ensureSymptom('port', 'hdmi_out', 'port', 'hdmi', 'HDMI Out');
ensureSymptom('keyboard', 'usb_keyboard_not_detect', 'keyboard', 'few', 'USB keyboard not detect');
ensureSymptom('keyboard', 'wireless_keyboard_not_detect', 'keyboard', 'few', 'Wireless keyboard not detect');
ensureSymptom('audio', 'front_jack', 'audio', 'jack', 'Front Audio Jack');
ensureSymptom('audio', 'rear_jack', 'audio', 'jack', 'Rear Audio Jack');
ensureSymptom('dock', 'no_signal', 'dock', 'displayport_not_working', 'No signal');
ensureSymptom('dock', 'usbc_data_thunderbolt', 'dock', 'usb_a_not_working', 'USB-C Data / Thunderbolt');
ensureLevel('tio_dock', 'Tiny-in-One (TIO) Dock');
ensureSymptom('tio_dock', 'not_charging_no_power', 'dock', 'dock_not_charging', 'Not Charging / No power to Tiny');
ensureSymptom('tio_dock', 'not_detected', 'dock', 'dock_not_detected', 'Not Detected');


// v4.9.8 Windows Recovery related guide patch
(function(){
  const recoveryGuides = ["reset_pc", "startup_repair", "system_restore", "uninstall_updates"];
  function ensureRecoveryRelated(levelKey, symptomKey){
    if(!RELATED_GUIDES[levelKey]) RELATED_GUIDES[levelKey] = {};
    const current = RELATED_GUIDES[levelKey][symptomKey] || [];
    RELATED_GUIDES[levelKey][symptomKey] = Array.from(new Set(current.concat(recoveryGuides)));
  }
  ["boot_loop", "stuck_logo", "auto_repair"].forEach(sym => ensureRecoveryRelated("boot", sym));
  ["slow", "freeze", "auto_reboot", "bsod", "login", "black_login"].forEach(sym => ensureRecoveryRelated("windows", sym));
})();

const GUIDE_ORDER = [
  'vantage_update','lenovo_diagnostics','battery_report','battery_health','bios_version','product_key','activation','reset_pc','startup_repair','system_restore','uninstall_updates','downgrade_bios','reinstall_windows','event_viewer','sfc','safe_mode','dump_file','bitlocker_recovery','office_activation','windows11_bypass','always_on_usb','bios_password','lock_on_leave','reset_battery','lcd_self_test','disable_audio_enhancements','disable_audio_enhancements_external_mic','thinkcentre_raid1_ssd_not_found_os_install','fn_ctrl_key_swap','emergency_reset','power_reset'
];

const MODEL_STRUCTURE = {
  thinkpad: [
    {level:'boot', symptoms:['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair']},
    {level:'windows', symptoms:['slow','freeze','auto_shutdown','auto_reboot','bsod','fingerprint','face_recognition','login','black_login']},
    {level:'display', symptoms:['abnormal_line','flickering','dim','black','color','ghost','dead','bright','garbage','touchscreen']},
    {level:'adapter_power', symptoms:['adapter','cord']},
    {level:'charging', symptoms:['typec','runtime','swollen','slow_charge','not_detect']},
    {level:'port', symptoms:['usbc_thunderbolt','usbc','usbc_display','usba','hdmi','sd','smart']},
    {level:'keyboard', symptoms:['few','all','auto_type','backlight','fn','left_ctrl','hotkey']},
    {level:'mouse', symptoms:['mouse_not_work','wireless','click_l_double','scroll']},
    {level:'network', symptoms:['wifi','lan','bluetooth','wwan','sim','smart_card_reader']},
    {level:'storage', symptoms:['ssd','ssd_not_detect_windows_setup']},
    {level:'audio', symptoms:['speaker_no','speaker_noise','jack','mic','echo','low','mic_low']},
    {level:'camera', symptoms:['not_work','blurry','face_recognition','lock_on_leave']},
    {level:'touchpad', symptoms:['cursor','click','jump','track']},
    {level:'fan', symptoms:['fan_error','fan_not_spin','fan_noise','fan_spin_high','fan_overheat']},
    {level:'dock', symptoms:['dock_not_charging','dock_not_detected','external_monitor_flickering','no_signal','usb_a_not_working','usbc_data_thunderbolt','displayport_not_working','hdmi_not_working','lan_not_working','audio_jack_not_working']},
    {level:'bios', symptoms:['bios_pw','svp']},
    {level:'error', symptoms:['e0162','e0188','e0190','e0271','e1802','e1962','e2100','e2101','e2200','e2201','boot_missing','pxe']},
    {level:'manual', symptoms:GUIDE_ORDER}
  ],
  ideapad: [
    {level:'boot', symptoms:['no_power','pond','boot_loop','stuck_logo','auto_repair']},
    {level:'windows', symptoms:['slow','freeze','auto_shutdown','auto_reboot','bsod','fingerprint','face_recognition','login','black_login']},
    {level:'display', symptoms:['abnormal_line','flickering','dim','black','color','ghost','dead','bright','garbage']},
    {level:'adapter_power', symptoms:['adapter','cord']},
    {level:'charging', symptoms:['typec','runtime','swollen','slow_charge','not_detect']},
    {level:'port', symptoms:['usbc','usbc_display','usba','hdmi','sd']},
    {level:'keyboard', symptoms:['few','all','auto_type','backlight','fn','hotkey']},
    {level:'mouse', symptoms:['mouse_not_work','wireless','click_l_double','scroll']},
    {level:'network', symptoms:['wifi','lan','bluetooth']},
    {level:'storage', symptoms:['ssd','ssd_not_detect_windows_setup']},
    {level:'audio', symptoms:['speaker_no','speaker_noise','jack','mic','echo','low','mic_low']},
    {level:'camera', symptoms:['not_work','blurry']},
    {level:'touchpad', symptoms:['cursor','click','jump']},
    {level:'fan', symptoms:['fan_error','fan_not_spin','fan_noise','fan_spin_high','fan_overheat']},
    {level:'bios', symptoms:['bios_pw','svp']},
    {level:'error', symptoms:['e0162','e0188','e0190','e0271','e1802','e1962','e2100','e2101','e2200','e2201','boot_missing','pxe']},
    {level:'manual', symptoms:GUIDE_ORDER}
  ],
  desktop: [
    {level:'boot', symptoms:['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair']},
    {level:'windows', symptoms:['slow','freeze','auto_shutdown','auto_reboot','bsod','fingerprint','login','black_login']},
    {level:'monitor', symptoms:['abnormal_line','no_power','flickering']},
    {level:'adapter_power', symptoms:['cord']},
    {level:'port', symptoms:['usba','usbc','hdmi','displayport','vga','serial']},
    {level:'keyboard', symptoms:['few','auto_type','usb_keyboard_not_detect','wireless_keyboard_not_detect','hotkey']},
    {level:'mouse', symptoms:['mouse_not_work','wireless','click_l_double','scroll']},
    {level:'network', symptoms:['wifi','lan','bluetooth']},
    {level:'storage', symptoms:['ssd','ssd_not_detect_windows_setup','hdd']},
    {level:'audio', symptoms:['speaker_no','speaker_noise','front_jack','rear_jack']},
    {level:'fan', symptoms:['fan_error','fan_not_spin','fan_noise','fan_spin_high','fan_overheat']},
    {level:'bios', symptoms:['bios_pw','svp']},
    {level:'error', symptoms:['e0162','e0188','e0190','e0271','e1802','e1962','e2100','e2101','e2200','e2201','boot_missing','pxe']},
    {level:'manual', symptoms:GUIDE_ORDER}
  ],
  tiny: [
    {level:'boot', symptoms:['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair']},
    {level:'windows', symptoms:['slow','freeze','auto_shutdown','auto_reboot','bsod','fingerprint','login','black_login']},
    {level:'monitor', symptoms:['abnormal_line','no_power','flickering']},
    {level:'adapter_power', symptoms:['adapter','cord']},
    {level:'port', symptoms:['usba','usbc','hdmi','displayport','vga','serial']},
    {level:'keyboard', symptoms:['few','auto_type','usb_keyboard_not_detect','wireless_keyboard_not_detect','hotkey']},
    {level:'mouse', symptoms:['mouse_not_work','wireless','click_l_double','scroll']},
    {level:'network', symptoms:['wifi','lan','bluetooth']},
    {level:'storage', symptoms:['ssd','ssd_not_detect_windows_setup']},
    {level:'audio', symptoms:['speaker_no','speaker_noise','front_jack','rear_jack']},
    {level:'fan', symptoms:['fan_error','fan_not_spin','fan_noise','fan_spin_high','fan_overheat']},
    {level:'tio_dock', symptoms:['not_charging_no_power','not_detected']},
    {level:'bios', symptoms:['bios_pw','svp']},
    {level:'error', symptoms:['e0162','e0188','e0190','e0271','e1802','e1962','e2100','e2101','e2200','e2201','boot_missing','pxe']},
    {level:'manual', symptoms:GUIDE_ORDER}
  ],
  aio: [
    {level:'boot', symptoms:['no_power','pond','boot_loop','stuck_logo','auto_repair']},
    {level:'windows', symptoms:['slow','freeze','auto_shutdown','auto_reboot','bsod','login','black_login']},
    {level:'display', symptoms:['abnormal_line','flickering','dim','black','color','ghost','dead','bright','garbage']},
    {level:'port', symptoms:['usba','usbc','hdmi_in','hdmi_out','sd']},
    {level:'keyboard', symptoms:['few','auto_type','usb_keyboard_not_detect','wireless_keyboard_not_detect','hotkey']},
    {level:'mouse', symptoms:['mouse_not_work','wireless','click_l_double','scroll']},
    {level:'network', symptoms:['wifi','lan','bluetooth']},
    {level:'storage', symptoms:['ssd','ssd_not_detect_windows_setup','hdd']},
    {level:'audio', symptoms:['speaker_no','speaker_noise','jack','mic','echo','low','mic_low']},
    {level:'camera', symptoms:['not_work','blurry']},
    {level:'fan', symptoms:['fan_error','fan_not_spin','fan_noise','fan_spin_high','fan_overheat']},
    {level:'bios', symptoms:['bios_pw','svp']},
    {level:'error', symptoms:['e0162','e0188','e0190','e0271','e1802','e1962','e2100','e2101','e2200','e2201','boot_missing','pxe']},
    {level:'manual', symptoms:GUIDE_ORDER}
  ]
};


// v4.9.1 Checklist Standardization
// - Device Manager pattern: Check <Device Name> in Device Manager
// - Device Manager check must be placed before Uninstall <Device Name> Driver and Restart
// - Touchscreen checklist revised
// - ThinkCentre Tiny hardware-specific checklist updates
(function applyV490Rules(){
  APP_OPTIONS.detect = APP_OPTIONS.detect || ["-- Select --", "Detect", "Not detect"];

  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || "select", text: false, diag: false}, extra || {});
  }
  function cloneQs(qs){ return (qs || []).map(q => ({...q})); }
  function getSym(level, symptom){ return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom]; }
  function setCommon(level, symptom, qs){
    const sym = getSym(level, symptom);
    if(sym){ delete sym.questions; sym.common = qs; }
  }
  function ensureQuestion(list, q, beforeLabel){
    if(list.some(item => item.label === q.label)) return list;
    const idx = beforeLabel ? list.findIndex(item => item.label === beforeLabel) : -1;
    if(idx >= 0) list.splice(idx, 0, q); else list.push(q);
    return list;
  }
  function renameDeviceManagerLabels(obj){
    if(!obj || typeof obj !== 'object') return;
    if(Array.isArray(obj)){ obj.forEach(renameDeviceManagerLabels); return; }
    const map = {
      "Check Fingerprint Device in Device Manager": "Check Fingerprint Device in Device Manager",
      "Check Camera in Device Manager": "Check Camera in Device Manager",
      "Check Card Reader in Device Manager": "Check Card Reader in Device Manager",
      "Check Smart Card Reader in Device Manager": "Check Smart Card Reader in Device Manager",
      "Check Wireless Driver in Device Manager": "Check Wireless Driver in Device Manager",
      "Check Bluetooth Device in Device Manager": "Check Bluetooth Device in Device Manager",
      "Check WWAN Device in Device Manager": "Check WWAN Device in Device Manager",
      "Check Audio Device in Device Manager": "Check Audio Device in Device Manager",
      "Check HID-compliant touch screen Driver in Device Manager": "Check HID-compliant touch screen Driver in Device Manager"
    };
    if(obj.label && map[obj.label]){
      obj.label = map[obj.label];
      obj.options = "detect";
      obj.text = false;
      obj.diag = false;
    }
    Object.keys(obj).forEach(k => renameDeviceManagerLabels(obj[k]));
  }
  renameDeviceManagerLabels(LEVELS);

  function renameStandaloneCameraLabels(obj){
    if(!obj || typeof obj !== 'object') return;
    if(Array.isArray(obj)){ obj.forEach(renameStandaloneCameraLabels); return; }
    if(obj.label === "Camera"){
      obj.label = "Check Camera in Device Manager";
    }
    Object.keys(obj).forEach(k => renameStandaloneCameraLabels(obj[k]));
  }
  renameStandaloneCameraLabels(LEVELS);

  // Touchscreen not work
  setCommon('display', 'touchscreen', [
    makeQ('Check HID-compliant touch screen Driver in Device Manager', 'detect'),
    makeQ('Uninstall HID-compliant touch screen Driver and Restart', 'select'),
    makeQ('Windows Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Re-install Windows', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
  // Touchscreen uses its own checklist and must not be overridden by generic Display checklist.
  const touchSym = getSym('display', 'touchscreen');
  if(touchSym){ touchSym.display = false; }

  // ThinkCentre Tiny > Boot > No power: Mini PC has no internal PSU and no Power Outlet item.
  const noPower = getSym('boot', 'no_power');
  if(noPower){
    noPower.questions = noPower.questions || {};
    noPower.questions.tiny = [
      makeQ('Power LED', 'led'),
      makeQ('Fan Check', 'fan'),
      makeQ('Swap Power Cord', 'swap'),
      makeQ('Physical damage / Liquid spilled', 'yesno'),
      makeQ('Other issue', 'yesno', {text:true})
    ];
  }

  // ThinkCentre Tiny > Keyboard: ask FRU P/N for every keyboard symptom using the existing Toolkit component.
  ['few','auto_type','usb_keyboard_not_detect','wireless_keyboard_not_detect','hotkey'].forEach(key => {
    const sym = getSym('keyboard', key);
    if(!sym) return;
    sym.questions = sym.questions || {};
    const base = cloneQs(sym.questions.tiny || sym.questions.desktop || sym.common || []);
    const withoutFru = base.filter(q => q.label !== 'FRU P/N');
    sym.questions.tiny = [makeQ('FRU P/N', 'detail_only', {text:true})].concat(withoutFru);
  });

  // Front / Rear Audio Jack: add Swap Audio Jack Port.
  ['front_jack','rear_jack'].forEach(key => {
    const sym = getSym('audio', key);
    if(!sym) return;
    const base = cloneQs(sym.common || []);
    sym.common = ensureQuestion(base, makeQ('Swap Audio Jack Port', 'swap'), 'Physical damage / Liquid spilled');
  });

  // TIO Dock > Not charging / No power to Tiny.
  const tio = getSym('tio_dock', 'not_charging_no_power');
  if(tio){
    const base = cloneQs(tio.common || []);
    tio.common = ensureQuestion(base, makeQ('Test Tiny without TIO Dock', 'swap'), 'Physical damage / Liquid spilled');
  }

  // Standardize Re-install Windows wording for checklist labels only.
  renameChecklistLabel(LEVELS, 'Re-install Windows', 'Re-install Windows');

  function renameChecklistLabel(obj, fromLabel, toLabel){
    if(!obj || typeof obj !== 'object') return;
    if(Array.isArray(obj)){ obj.forEach(item => renameChecklistLabel(item, fromLabel, toLabel)); return; }
    if(obj.label === fromLabel) obj.label = toLabel;
    Object.keys(obj).forEach(k => renameChecklistLabel(obj[k], fromLabel, toLabel));
  }
})();


// v4.9.1 Model & Symptom Validation fixes
// - USB-C Display checklist must match USB-C to monitor connection, not HDMI.
// - DisplayPort checklist must use DisplayPort cable, not HDMI cable.
(function applyV491Rules(){
  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || "select", text: false, diag: false}, extra || {});
  }
  function getSym(level, symptom){
    return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom];
  }
  function setCommon(level, symptom, qs){
    const sym = getSym(level, symptom);
    if(sym){ delete sym.questions; sym.common = qs; }
  }

  // ThinkPad / IdeaPad > Port > USB-C Display
  setCommon('port', 'usbc_display', [
    makeQ('Swap USB-C cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Test HDMI Port on Notebook', 'swap'),
    makeQ('Thunderbolt Driver Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Emergency Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);

  // ThinkCentre Desktop / ThinkCentre Tiny > Port > DisplayPort
  setCommon('port', 'displayport', [
    makeQ('Swap DisplayPort cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Power Reset', 'select'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
})();

// v4.9.1 Full Audit Corrections
// - Port checklist cable/action must match selected port/interface.
// - VGA must not use HDMI checklist wording.
// - Generic External Monitor test wording is replaced with Swap Monitor for port display symptoms.
(function applyV491FullAuditCorrections(){
  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || "select", text: false, diag: false}, extra || {});
  }
  function getSym(level, symptom){
    return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom];
  }
  function setCommon(level, symptom, qs){
    const sym = getSym(level, symptom);
    if(sym){ delete sym.questions; sym.common = qs; }
  }

  // ThinkCentre Desktop / ThinkCentre Tiny > Port > VGA
  setCommon('port', 'vga', [
    makeQ('Swap VGA cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Power Reset', 'select'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);

  // Keep HDMI as HDMI, but standardize monitor action wording.
  setCommon('port', 'hdmi', [
    makeQ('Swap HDMI cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset / Emergency Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);

  // AIO HDMI In / HDMI Out remain HDMI cable based, but use Swap Monitor wording where applicable.
  ['hdmi_in','hdmi_out'].forEach(function(key){
    setCommon('port', key, [
      makeQ('Swap HDMI cable', 'swap'),
      makeQ('Swap Monitor', 'swap'),
      makeQ('Graphics Driver Update', 'update_status', {update:true}),
      makeQ('BIOS Update', 'update_status', {update:true}),
      makeQ('Power Reset / Emergency Reset', 'select'),
      makeQ('Physical damage / Liquid spilled', 'yesno'),
      makeQ('Other issue', 'yesno', {text:true})
    ]);
  });
})();

// v4.9.1 Full Audit Corrections - Serial Port
// Serial Port must not reuse USB-A checklist wording.
(function applyV491SerialPortAudit(){
  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || "select", text: false, diag: false}, extra || {});
  }
  function getSym(level, symptom){
    return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom];
  }
  function setCommon(level, symptom, qs){
    const sym = getSym(level, symptom);
    if(sym){ delete sym.questions; sym.common = qs; }
  }
  setCommon('port', 'serial', [
    makeQ('Swap Serial Cable', 'swap'),
    makeQ('Swap Serial Device', 'swap'),
    makeQ('Check Serial Port in Device Manager', 'detect'),
    makeQ('Serial Port Driver Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
})();

// v4.9.2 Standard Workflow / Full Project Audit Corrections
// - Apply Standard Troubleshooting Workflow ordering support with FRU P/N as the last item.
// - Emergency Reset is limited by app.js to ThinkPad Boot: No power / Power on no display / Power on no display + Beep Sound.
// - Port checklist actions must match the selected port/interface and model hardware.
// - If No power already asks Swap Adapter, do not also ask Swap Power Cord.
(function applyV492StandardWorkflowAudit(){
  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || "select", text: false, diag: false}, extra || {});
  }
  function getSym(level, symptom){
    return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom];
  }
  function setCommon(level, symptom, qs){
    const sym = getSym(level, symptom);
    if(sym){ delete sym.questions; sym.common = qs; }
  }
  function walkQuestions(obj, fn){
    if(!obj || typeof obj !== 'object') return;
    if(Array.isArray(obj)){
      obj.forEach(fn);
      obj.forEach(q => walkQuestions(q, fn));
      return;
    }
    Object.keys(obj).forEach(k => walkQuestions(obj[k], fn));
  }
  function normalizeList(list){
    if(!Array.isArray(list)) return list;
    // Remove duplicate FRU P/N and place it at the end after Other issue.
    const fru = list.filter(q => q && q.label === 'FRU P/N');
    let out = list.filter(q => !(q && q.label === 'FRU P/N'));
    if(fru.length) out.push(fru[0]);
    return out;
  }
  function normalizeAllQuestionArrays(obj){
    if(!obj || typeof obj !== 'object') return;
    if(Array.isArray(obj)) return;
    if(Array.isArray(obj.common)) obj.common = normalizeList(obj.common);
    if(obj.questions && typeof obj.questions === 'object'){
      Object.keys(obj.questions).forEach(k => {
        if(Array.isArray(obj.questions[k])) obj.questions[k] = normalizeList(obj.questions[k]);
      });
    }
    Object.keys(obj).forEach(k => normalizeAllQuestionArrays(obj[k]));
  }

  // Rename vague / legacy Device Manager checklist labels.
  walkQuestions(LEVELS, function(q){
    if(!q || !q.label) return;
    const map = {
      'Camera': 'Check Camera in Device Manager',
      'Test Camera': 'Check Camera in Device Manager',
      'Device Manager shows Camera': 'Check Camera in Device Manager',
      'Device Manager shows Fingerprint': 'Check Fingerprint Device in Device Manager',
      'Device Manager shows card reader': 'Check Card Reader in Device Manager',
      'Device Manager shows Smart Card Reader': 'Check Smart Card Reader in Device Manager',
      'Device Manager shows Wireless Driver': 'Check Wireless Driver in Device Manager',
      'Device Manager shows Bluetooth': 'Check Bluetooth Device in Device Manager',
      'WWAN device in Device Manager': 'Check WWAN Device in Device Manager',
      'Device Manager shows Audio': 'Check Audio Device in Device Manager'
    };
    if(map[q.label]){ q.label = map[q.label]; q.options = 'detect'; q.text = false; q.diag = false; }
  });

  // ThinkCentre Tiny keyboard: keep existing FRU component but it must be last, never first.
  ['few','auto_type','usb_keyboard_not_detect','wireless_keyboard_not_detect','hotkey'].forEach(key => {
    const sym = getSym('keyboard', key);
    if(!sym) return;
    sym.questions = sym.questions || {};
    const base = (sym.questions.tiny || sym.questions.desktop || sym.common || []).map(q => ({...q})).filter(q => q.label !== 'FRU P/N');
    base.push(makeQ('FRU P/N', 'detail_only', {text:true}));
    sym.questions.tiny = base;
  });

  // USB-C Display means direct USB-C from notebook to USB-C monitor. Do not use HDMI/DP wording.
  setCommon('port', 'usbc_display', [
    makeQ('Swap USB-C Cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Test HDMI Port on Notebook', 'swap'),
    makeQ('Thunderbolt Driver Update', 'update_status', {update:true}),
    makeQ('Windows Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);

  // Port-specific display symptoms.
  setCommon('port', 'displayport', [
    makeQ('Swap DisplayPort Cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('Windows Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
  setCommon('port', 'vga', [
    makeQ('Swap VGA Cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('Windows Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
  setCommon('port', 'hdmi', [
    makeQ('Swap HDMI Cable', 'swap'),
    makeQ('Swap Monitor', 'swap'),
    makeQ('Graphics Driver Update', 'update_status', {update:true}),
    makeQ('Windows Update', 'update_status', {update:true}),
    makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
    makeQ('BIOS Update', 'update_status', {update:true}),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ]);
  ['hdmi_in','hdmi_out'].forEach(function(key){
    setCommon('port', key, [
      makeQ('Swap HDMI Cable', 'swap'),
      makeQ('Swap Monitor', 'swap'),
      makeQ('Graphics Driver Update', 'update_status', {update:true}),
      makeQ('Windows Update', 'update_status', {update:true}),
      makeQ('Lenovo Vantage Update', 'update_status', {update:true}),
      makeQ('BIOS Update', 'update_status', {update:true}),
      makeQ('Power Reset', 'select'),
      makeQ('Physical damage / Liquid spilled', 'yesno'),
      makeQ('Other issue', 'yesno', {text:true})
    ]);
  });

  // No power duplicate AC cord rule: if a model checklist has Swap Adapter, remove Swap Power Cord.
  const noPower = getSym('boot', 'no_power');
  if(noPower && noPower.questions){
    Object.keys(noPower.questions).forEach(product => {
      const qs = noPower.questions[product];
      if(!Array.isArray(qs)) return;
      const hasAdapter = qs.some(q => /^Swap (AC )?Adapter$/.test(q.label) || q.label === 'Swap Adapter');
      if(hasAdapter) noPower.questions[product] = qs.filter(q => q.label !== 'Swap Power Cord');
    });
  }

  // Remove legacy combined reset label from non-boot display/port checklists. App.js still splits it safely if it appears.
  walkQuestions(LEVELS, function(q){
    if(!q || !q.label) return;
    if(q.label === 'Power Reset / Emergency Reset') q.label = 'Power Reset';
  });
  // Restore combined label only on the three ThinkPad Boot symptoms where Emergency Reset is explicitly allowed.
  ['no_power','pond','pond_beep'].forEach(function(key){
    const sym = getSym('boot', key);
    if(!sym || !sym.questions || !Array.isArray(sym.questions.thinkpad)) return;
    sym.questions.thinkpad.forEach(q => { if(q.label === 'Power Reset') q.label = 'Power Reset / Emergency Reset'; });
  });

  normalizeAllQuestionArrays(LEVELS);
})();

// v4.9.2 Power Reset Matrix Full Audit
// - Enforce agreed Power Reset matrix across every model/symptom checklist.
// - Emergency Reset remains limited to ThinkPad Boot: No power / Power on no display / Power on no display + Beep Sound.
// - FRU P/N remains the last checklist item.
(function applyV492PowerResetMatrixAudit(){
  function makeQ(label, options, extra){
    return Object.assign({label: label, options: options || 'select', text: false, diag: false}, extra || {});
  }
  function getSym(level, symptom){
    return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom];
  }
  const powerResetMatrix = {
    boot: ['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair'],
    windows: ['freeze','auto_shutdown','auto_reboot','black_login'],
    display: ['black','flickering','touchscreen'],
    charging: ['typec','not_detect','slow_charge'],
    port: ['usbc_thunderbolt','usbc','usbc_display','usba','hdmi','sd','smart'],
    keyboard: ['all','auto_type','hotkey'],
    mouse: ['mouse_not_work'],
    touchpad: ['cursor','click','jump','track'],
    network: ['wifi','bluetooth','wwan'],
    audio: ['speaker_no','jack','mic'],
    camera: ['not_work'],
    fan: ['fan_error','fan_not_spin']
  };
  const emergencyThinkPadBoot = new Set(['no_power','pond','pond_beep']);
  function shouldHavePowerReset(level, symptom){
    return (powerResetMatrix[level] || []).includes(symptom);
  }
  function isResetLabel(label){
    return label === 'Power Reset' || label === 'Emergency Reset' || label === 'Power Reset / Emergency Reset';
  }
  function resetQuestionFor(level, symptom, product){
    if(product === 'thinkpad' && level === 'boot' && emergencyThinkPadBoot.has(symptom)){
      return makeQ('Power Reset / Emergency Reset', 'select');
    }
    return makeQ('Power Reset', 'select');
  }
  function normalizeFruLast(list){
    const fru = list.filter(q => q.label === 'FRU P/N');
    const out = list.filter(q => q.label !== 'FRU P/N');
    if(fru.length) out.push(fru[0]);
    return out;
  }
  function insertResetByWorkflow(list, q){
    let out = list.filter(item => !isResetLabel(item.label));
    const tailLabels = ['Physical damage / Liquid spilled', 'Other issue', 'Event Viewer', 'Dump File', 'FRU P/N'];
    let idx = -1;
    // Standard Workflow: reset after BIOS Update / Lenovo Vantage Update / Windows Update / Driver Update, before diagnostics, reinstall, physical checks and FRU.
    const beforeLabels = ['BIOS XXX Enabled', 'Run Lenovo Diagnostics', 'Diagnostics', 'Swap RAM', 'Swap SSD', 'Swap HDD', 'Re-install Windows'].concat(tailLabels);
    idx = out.findIndex(item => beforeLabels.includes(item.label));
    if(idx < 0) idx = out.findIndex(item => tailLabels.includes(item.label));
    if(idx < 0) out.push(q); else out.splice(idx, 0, q);
    return normalizeFruLast(out);
  }
  function normalizeList(level, symptom, product, list){
    if(!Array.isArray(list)) return list;
    let out = list.map(q => ({...q}));
    if(shouldHavePowerReset(level, symptom)){
      out = insertResetByWorkflow(out, resetQuestionFor(level, symptom, product));
    }else{
      out = out.filter(q => !isResetLabel(q.label));
      out = normalizeFruLast(out);
    }
    return out;
  }
  Object.entries(LEVELS).forEach(([levelKey, level]) => {
    Object.entries(level.symptoms || {}).forEach(([symKey, sym]) => {
      if(Array.isArray(sym.common)){
        // If a ThinkPad-only Emergency Reset version is required, keep common as Power Reset only and create ThinkPad override below.
        sym.common = normalizeList(levelKey, symKey, 'common', sym.common);
      }
      if(sym.questions && typeof sym.questions === 'object'){
        Object.keys(sym.questions).forEach(product => {
          if(Array.isArray(sym.questions[product])){
            sym.questions[product] = normalizeList(levelKey, symKey, product, sym.questions[product]);
          }
        });
      }
      // For ThinkPad Boot Emergency symptoms using common checklists, create a ThinkPad override with the combined reset label.
      if(levelKey === 'boot' && emergencyThinkPadBoot.has(symKey)){
        const base = (sym.questions && sym.questions.thinkpad) || sym.common;
        if(Array.isArray(base)){
          sym.questions = sym.questions || {};
          sym.questions.thinkpad = normalizeList(levelKey, symKey, 'thinkpad', base);
        }
      }
    });
  });
})();

// v4.9.2 Power Reset Matrix Display Override
// Display > Black screen and Flickering must use explicit checklists so Power Reset is included by matrix and generic display checklist does not override it.
(function applyV492DisplayPowerResetOverride(){
  function makeQ(label, options, extra){ return Object.assign({label, options: options || 'select', text:false, diag:false}, extra || {}); }
  function getSym(level, symptom){ return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom]; }
  const displayPowerResetQs = [
    makeQ('Check BIOS', 'swap'),
    makeQ('Move LCD lid', 'select'),
    makeQ('External Monitor test', 'swap'),
    makeQ('Graphics Driver Update', 'select'),
    makeQ('Power Reset', 'select'),
    makeQ('Physical damage / Liquid spilled', 'yesno'),
    makeQ('Other issue', 'yesno', {text:true})
  ];
  ['black','flickering'].forEach(function(key){
    const sym = getSym('display', key);
    if(sym){ sym.display = false; sym.common = displayPowerResetQs.map(q => ({...q})); }
  });
})();


// v4.9.2 Final Power Reset Matrix + Workflow Full Audit
// - Applies the final approved Power Reset Matrix.
// - Moves Event Viewer / Dump file collected before Physical damage / Liquid spilled.
// - Keeps FRU P/N as the final checklist item.
(function applyV492FinalFullAudit(){
  function makeQ(label, options, extra){ return Object.assign({label: label, options: options || 'select', text: false, diag: false}, extra || {}); }
  function isResetLabel(label){ return label === 'Power Reset' || label === 'Emergency Reset' || label === 'Power Reset / Emergency Reset'; }
  function getSym(level, symptom){ return LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom]; }

  const finalPowerResetMatrix = {
    boot: ['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair'],
    windows: ['freeze','black_login'],
    display: ['black','touchscreen'],
    charging: ['typec','not_detect','slow_charge'],
    port: ['usbc_thunderbolt','usbc','usbc_display','usba','hdmi','sd','smart'],
    keyboard: ['all','auto_type','hotkey'],
    fan: ['fan_error','fan_not_spin']
  };
  const emergencyThinkPadBoot = new Set(['no_power','pond','pond_beep']);
  function shouldHavePowerReset(level, symptom){ return (finalPowerResetMatrix[level] || []).includes(symptom); }
  function resetQuestionFor(level, symptom, product){
    if(product === 'thinkpad' && level === 'boot' && emergencyThinkPadBoot.has(symptom)){
      return makeQ('Power Reset / Emergency Reset', 'select');
    }
    return makeQ('Power Reset', 'select');
  }
  function cloneList(list){ return (list || []).map(q => Object.assign({}, q)); }
  function normalizeFruLast(list){
    const fru = list.filter(q => q.label === 'FRU P/N');
    let out = list.filter(q => q.label !== 'FRU P/N');
    if(fru.length) out.push(fru[0]);
    return out;
  }
  function normalizeEventPosition(list){
    const eventLabels = new Set(['Event Viewer / Dump file collected','Event Viewer / Dump File collected','Event Viewer','Dump File']);
    const events = list.filter(q => eventLabels.has(q.label));
    let out = list.filter(q => !eventLabels.has(q.label));
    if(events.length){
      let idx = out.findIndex(q => q.label === 'Physical damage / Liquid spilled');
      if(idx < 0) idx = out.findIndex(q => q.label === 'Other issue');
      if(idx < 0) idx = out.findIndex(q => q.label === 'FRU P/N');
      if(idx < 0) out = out.concat(events);
      else out.splice(idx, 0, ...events);
    }
    return out;
  }
  function insertResetByWorkflow(list, resetQ){
    let out = list.filter(q => !isResetLabel(q.label));
    // Standard Workflow: reset after update items, before BIOS setting / diagnostics / swap / reinstall / logs / physical checks.
    const beforeLabels = new Set([
      'BIOS XXX Enabled','Run Lenovo Diagnostics','Lenovo Diagnostics','Diagnostics',
      'Swap RAM','Swap SSD','Swap HDD','Swap DisplayPort Cable','Swap VGA Cable','Swap HDMI Cable','Swap USB-C Cable','Swap Monitor','Swap Keyboard','Swap Adapter','Swap AC Adapter',
      'Re-install Windows','Event Viewer / Dump file collected','Event Viewer / Dump File collected','Event Viewer','Dump File',
      'Physical damage / Liquid spilled','Other issue','FRU P/N'
    ]);
    let idx = out.findIndex(q => beforeLabels.has(q.label));
    if(idx < 0) out.push(resetQ); else out.splice(idx, 0, resetQ);
    return out;
  }
  function normalizeList(level, symptom, product, list){
    if(!Array.isArray(list)) return list;
    let out = cloneList(list);
    // Standardize diagnostics label.
    out.forEach(q => { if(q.label === 'Lenovo Diagnostics') q.label = 'Run Lenovo Diagnostics'; });
    if(shouldHavePowerReset(level, symptom)){
      out = insertResetByWorkflow(out, resetQuestionFor(level, symptom, product));
    }else{
      out = out.filter(q => !isResetLabel(q.label));
    }
    out = normalizeEventPosition(out);
    out = normalizeFruLast(out);
    return out;
  }

  Object.entries(LEVELS).forEach(([levelKey, level]) => {
    Object.entries(level.symptoms || {}).forEach(([symKey, sym]) => {
      if(Array.isArray(sym.common)){
        sym.common = normalizeList(levelKey, symKey, 'common', sym.common);
      }
      if(sym.questions && typeof sym.questions === 'object'){
        Object.keys(sym.questions).forEach(product => {
          if(Array.isArray(sym.questions[product])){
            sym.questions[product] = normalizeList(levelKey, symKey, product, sym.questions[product]);
          }
        });
      }
      if(levelKey === 'boot' && emergencyThinkPadBoot.has(symKey)){
        const base = (sym.questions && sym.questions.thinkpad) || sym.common;
        if(Array.isArray(base)){
          sym.questions = sym.questions || {};
          sym.questions.thinkpad = normalizeList(levelKey, symKey, 'thinkpad', base);
        }
      }
    });
  });

  // The previous v4.9.2 display override added Power Reset to Flickering.
  // Final matrix keeps Power Reset only for Display > Black screen and Touchscreen not work.
  const flickering = getSym('display','flickering');
  if(flickering){
    if(Array.isArray(flickering.common)) flickering.common = normalizeList('display','flickering','common',flickering.common);
    if(flickering.questions){
      Object.keys(flickering.questions).forEach(product => {
        if(Array.isArray(flickering.questions[product])) flickering.questions[product] = normalizeList('display','flickering',product,flickering.questions[product]);
      });
    }
  }
})();


// v4.9.3 Email / Workflow / Full Audit Corrections
// - Final Power Reset Matrix is enforced across every checklist.
// - Event Viewer / Dump file collected must appear before Physical damage / Liquid spilled.
// - FRU P/N must be the final checklist item.
// - Device Manager checks use: Check <Device Name> in Device Manager.
// - Duplicate checklist labels are removed while preserving first occurrence.
(function applyV493FullAudit(){
  function makeQ(label, options, extra){ return Object.assign({label: label, options: options || 'select', text: false, diag: false}, extra || {}); }
  function isResetLabel(label){ return label === 'Power Reset' || label === 'Emergency Reset' || label === 'Power Reset / Emergency Reset'; }
  const finalPowerResetMatrix = {
    boot: ['no_power','pond','pond_beep','boot_loop','stuck_logo','auto_repair'],
    windows: ['freeze','black_login'],
    display: ['black','touchscreen'],
    charging: ['typec','not_detect','slow_charge'],
    port: ['usbc_thunderbolt','usbc','usbc_display','usba','hdmi','sd','smart'],
    keyboard: ['all','auto_type','hotkey'],
    fan: ['fan_error','fan_not_spin']
  };
  const emergencyThinkPadBoot = new Set(['no_power','pond','pond_beep']);
  const labelMap = {
    'Camera': 'Check Camera in Device Manager',
    'Test Camera': 'Check Camera in Device Manager',
    'Device Manager shows Camera': 'Check Camera in Device Manager',
    'Device Manager shows Fingerprint': 'Check Fingerprint Device in Device Manager',
    'Device Manager shows card reader': 'Check Card Reader in Device Manager',
    'Device Manager shows Smart Card Reader': 'Check Smart Card Reader in Device Manager',
    'Device Manager shows Wireless Driver': 'Check Wireless Driver in Device Manager',
    'Device Manager shows Bluetooth': 'Check Bluetooth Device in Device Manager',
    'WWAN device in Device Manager': 'Check WWAN Device in Device Manager',
    'Device Manager shows Audio': 'Check Audio Device in Device Manager',
    'Lenovo Diagnostics': 'Run Lenovo Diagnostics',
    'Swap USB-C cable': 'Swap USB-C Cable',
    'Swap DisplayPort cable': 'Swap DisplayPort Cable',
    'Swap HDMI cable': 'Swap HDMI Cable',
    'Swap LAN cable': 'Swap LAN Cable',
    'Swap HDMI / DisplayPort cable': 'Swap HDMI / DisplayPort Cable'
  };
  function shouldHavePowerReset(level, symptom){ return (finalPowerResetMatrix[level] || []).includes(symptom); }
  function resetQuestionFor(level, symptom, product){
    if(product === 'thinkpad' && level === 'boot' && emergencyThinkPadBoot.has(symptom)) return makeQ('Power Reset / Emergency Reset', 'select');
    return makeQ('Power Reset', 'select');
  }
  function standardizeQuestion(q){
    const out = Object.assign({}, q);
    if(labelMap[out.label]) out.label = labelMap[out.label];
    if(/^Check .+ in Device Manager$/.test(out.label)){ out.options = 'detect'; out.text = false; out.diag = false; }
    return out;
  }
  function normalizeEventPosition(list){
    const eventLabels = new Set(['Event Viewer / Dump file collected','Event Viewer / Dump File collected','Event Viewer','Dump File']);
    const events = list.filter(q => eventLabels.has(q.label)).map(q => Object.assign({}, q, {label:'Event Viewer / Dump file collected'}));
    let out = list.filter(q => !eventLabels.has(q.label));
    if(events.length){
      let idx = out.findIndex(q => q.label === 'Physical damage / Liquid spilled');
      if(idx < 0) idx = out.findIndex(q => q.label === 'Other issue');
      if(idx < 0) idx = out.findIndex(q => q.label === 'FRU P/N');
      if(idx < 0) out = out.concat(events); else out.splice(idx, 0, ...events);
    }
    return out;
  }
  function insertResetByWorkflow(list, resetQ){
    let out = list.filter(q => !isResetLabel(q.label));
    const beforeLabels = new Set([
      'BIOS XXX Enabled','Run Lenovo Diagnostics','Lenovo Diagnostics Storage','Lenovo Diagnostics Battery','Diagnostics',
      'Swap RAM','Swap SSD','Swap HDD','Swap DisplayPort Cable','Swap VGA Cable','Swap HDMI Cable','Swap USB-C Cable','Swap Monitor','Swap Keyboard','Swap Adapter','Swap AC Adapter',
      'Re-install Windows','Event Viewer / Dump file collected','Physical damage / Liquid spilled','Other issue','FRU P/N'
    ]);
    let idx = out.findIndex(q => beforeLabels.has(q.label));
    if(idx < 0) out.push(resetQ); else out.splice(idx, 0, resetQ);
    return out;
  }
  function dedupeLabels(list){
    const seen = new Set();
    const out = [];
    list.forEach(q => {
      if(seen.has(q.label)) return;
      seen.add(q.label);
      out.push(q);
    });
    return out;
  }
  function fruLast(list){
    const fru = list.filter(q => q.label === 'FRU P/N');
    let out = list.filter(q => q.label !== 'FRU P/N');
    if(fru.length) out.push(fru[0]);
    return out;
  }
  function normalizeDeviceManagerBeforeUninstall(list){
    let out = list.slice();
    out.slice().forEach(checkQ => {
      if(!/^Check .+ in Device Manager$/.test(checkQ.label)) return;
      const device = checkQ.label.replace(/^Check /, '').replace(/ in Device Manager$/, '');
      const uninstallLabel = 'Uninstall ' + device.replace(/ Driver$/, '') + ' Driver and Restart';
      const ci = out.findIndex(q => q.label === checkQ.label);
      const ui = out.findIndex(q => q.label === uninstallLabel);
      if(ui >= 0 && ci > ui){
        const [item] = out.splice(ci, 1);
        const newUi = out.findIndex(q => q.label === uninstallLabel);
        out.splice(newUi, 0, item);
      }
    });
    return out;
  }
  function normalizeList(level, symptom, product, list){
    if(!Array.isArray(list)) return list;
    let out = list.map(standardizeQuestion);
    if(shouldHavePowerReset(level, symptom)) out = insertResetByWorkflow(out, resetQuestionFor(level, symptom, product));
    else out = out.filter(q => !isResetLabel(q.label));
    out = normalizeEventPosition(out);
    out = dedupeLabels(out);
    out = normalizeDeviceManagerBeforeUninstall(out);
    out = fruLast(out);
    return out;
  }
  Object.entries(LEVELS).forEach(([levelKey, level]) => {
    Object.entries(level.symptoms || {}).forEach(([symKey, sym]) => {
      if(Array.isArray(sym.common)) sym.common = normalizeList(levelKey, symKey, 'common', sym.common);
      if(sym.questions && typeof sym.questions === 'object'){
        Object.keys(sym.questions).forEach(product => {
          if(Array.isArray(sym.questions[product])) sym.questions[product] = normalizeList(levelKey, symKey, product, sym.questions[product]);
        });
      }
      if(levelKey === 'boot' && emergencyThinkPadBoot.has(symKey)){
        const base = (sym.questions && sym.questions.thinkpad) || sym.common;
        if(Array.isArray(base)){
          sym.questions = sym.questions || {};
          sym.questions.thinkpad = normalizeList(levelKey, symKey, 'thinkpad', base);
        }
      }
    });
  });
})();


// v4.9.6 Global Checklist Mapping Audit
// Mapping.txt is packaged in the toolkit root and Reference_Text/Mapping.txt.
// GLOBAL_CHECKLIST_MAPPING is the runtime copy used by Email / action guidance.
const GLOBAL_CHECKLIST_MAPPING = {
  "Adapter test": {
    "th": "ทดสอบ Adapter แล้วแจ้งผล",
    "en": "Check Adapter test."
  },
  "Adapter test on other machine": {
    "th": "ทดสอบนำ Adapter ไปทดสอบกับเครื่องอื่น",
    "en": "Test this adapter with another machine."
  },
  "Adapter works with another cord": {
    "th": "ทดสอบ Adapter กับสายไฟเส้นอื่น",
    "en": "Check Adapter works with another cord."
  },
  "Airplane Mode": {
    "th": "ตรวจสอบว่าไม่ได้เปิด Airplane Mode",
    "en": "Check that Airplane Mode is turned off."
  },
  "Another Router test": {
    "th": "ทดสอบเชื่อมต่อกับ Router อื่น",
    "en": "Test with another router."
  },
  "Audio Driver Update": {
    "th": "อัปเดต Driver ของ Audio ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Audio driver to the latest version."
  },
  "Audio Jack on notebook test": {
    "th": "ตรวจสอบหัวข้อ Audio Jack on notebook test",
    "en": "Check Audio Jack on notebook test."
  },
  "Auto reboot occurs": {
    "th": "พบอาการเครื่อง Restart ช่วงใดบ้าง",
    "en": "Check when the automatic restart occurs."
  },
  "Battery charge level checked": {
    "th": "ตรวจสอบระดับแบตเตอรี่ปัจจุบัน",
    "en": "Check Battery charge level."
  },
  "Battery Conservation Mode": {
    "th": "ตรวจสอบ Battery Conservation Mode ใน Lenovo Vantage",
    "en": "Check Battery Conservation Mode."
  },
  "Battery Health in Lenovo Vantage": {
    "th": "ตรวจสอบ Battery Health ใน Lenovo Vantage",
    "en": "Check Battery Health in Lenovo Vantage."
  },
  "Battery percentage": {
    "th": "ตรวจสอบเปอร์เซ็นต์แบตเตอรี่ปัจจุบัน",
    "en": "Check the current battery percentage."
  },
  "Battery Report collected": {
    "th": "สร้าง Battery Report และแนบไฟล์ผลลัพธ์",
    "en": "Generate and attach the Battery Report."
  },
  "Battery swollen confirmed": {
    "th": "ตรวจสอบว่าแบตเตอรี่มีอาการบวมหรือไม่",
    "en": "Check whether the battery is swollen."
  },
  "Beep sound / pattern": {
    "th": "รบกวนส่งคลิปถ่ายเสียงร้องเตือน (Beep sound) เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a video of the beep sound for further checking."
  },
  "BIOS Camera enabled": {
    "th": "ตรวจสอบว่า Camera เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Camera enabled."
  },
  "BIOS default loaded": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check BIOS default loaded."
  },
  "BIOS detects HDD": {
    "th": "ตรวจสอบหัวข้อ BIOS detects HDD",
    "en": "Check BIOS detects HDD."
  },
  "BIOS detects storage": {
    "th": "ตรวจสอบหน้า Bios พบ SSD/HDD หรือไม่",
    "en": "Check whether BIOS detects the SSD/HDD."
  },
  "BIOS Fingerprint enabled": {
    "th": "ตรวจสอบว่า Fingerprint เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Fingerprint enabled."
  },
  "BIOS Hotkey mode": {
    "th": "ตรวจสอบโหมด Hotkey ใน BIOS",
    "en": "Check BIOS Hotkey mode."
  },
  "BIOS Keyboard Backlight setting": {
    "th": "ตรวจสอบการตั้งค่า Keyboard Backlight ใน BIOS",
    "en": "Check BIOS Keyboard Backlight setting."
  },
  "BIOS Touchpad enabled": {
    "th": "ตรวจสอบว่า Touchpad เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Touchpad enabled."
  },
  "BIOS Update": {
    "th": "ทดสอบอัปเดต BIOS ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update BIOS to the latest version."
  },
  "BIOS update": {
    "th": "ทดสอบอัปเดต BIOS ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update BIOS to the latest version."
  },
  "Bluetooth Driver Update": {
    "th": "อัปเดต Driver ของ Bluetooth ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Bluetooth driver to the latest version."
  },
  "Bluetooth toggle available": {
    "th": "ตรวจสอบว่ามีปุ่มเปิด/ปิด Bluetooth ใน Windows หรือไม่",
    "en": "Check whether the Bluetooth toggle is available in Windows."
  },
  "Boot order checked": {
    "th": "ตรวจสอบ Boot Order ใน BIOS",
    "en": "Check Boot order."
  },
  "BSOD occurs": {
    "th": "พบอาการจอฟ้า (BSOD) ช่วงใดบ้าง",
    "en": "Check when the BSOD occurs."
  },
  "Camera Driver Update": {
    "th": "อัปเดต Driver ของ Camera ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Camera driver to the latest version."
  },
  "Camera Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ Camera ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Camera driver to the latest version."
  },
  "Camera Shutter": {
    "th": "ตรวจสอบว่า Camera Shutter เปิดอยู่หรือไม่",
    "en": "Check whether the camera shutter is open."
  },
  "Can Access Windows": {
    "th": "สามารถเข้าหน้า Windows ได้หรือไม่",
    "en": "Check whether Windows can be accessed."
  },
  "Can access Windows": {
    "th": "สามารถเข้าหน้า Windows ได้หรือไม่",
    "en": "Check whether Windows can be accessed."
  },
  "Can Access BIOS": {
    "th": "สามารถเข้าหน้า BIOS ได้หรือไม่",
    "en": "Check whether the machine can enter BIOS."
  },
  "Can Access Safe Mode": {
    "th": "สามารถเข้าหน้า Safe Mode ได้หรือไม่",
    "en": "Check whether the machine can enter Safe Mode."
  },
  "Can detect Wi-Fi signal": {
    "th": "ตรวจสอบว่าเครื่องมองเห็นสัญญาณ Wi-Fi หรือไม่",
    "en": "Check whether the machine can detect Wi-Fi signals."
  },
  "Can login with another account": {
    "th": "ทดสอบ Login ด้วยบัญชีผู้ใช้อื่น",
    "en": "Test login with another user account."
  },
  "Caps Lock LED works": {
    "th": "ทดสอบกดปุ่ม Caps Lock ดูว่าไฟตอบสนองไหม",
    "en": "Press Caps Lock and check whether the indicator responds."
  },
  "Caps Lock Toggle": {
    "th": "ทดสอบกดปุ่ม Caps Lock ดูว่าไฟตอบสนองไหม",
    "en": "Press Caps Lock and check whether the indicator responds."
  },
  "Charge LED": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "Check Audio Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Audio หรือไม่",
    "en": "Check whether Device Manager detects Audio."
  },
  "Check BIOS": {
    "th": "ตรวจสอบการตั้งค่าใน BIOS",
    "en": "Check BIOS settings."
  },
  "Check Bluetooth Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Bluetooth หรือไม่",
    "en": "Check whether Device Manager detects Bluetooth."
  },
  "Check Camera in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Camera หรือไม่",
    "en": "Check whether Device Manager detects Camera."
  },
  "Check Card Reader in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Card Reader หรือไม่",
    "en": "Check whether Device Manager detects Card Reader."
  },
  "Check Fingerprint Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Fingerprint หรือไม่",
    "en": "Check whether Device Manager detects Fingerprint."
  },
  "Check for Dust and Foreign Objects": {
    "th": "ตรวจสอบฝุ่นหรือสิ่งแปลกปลอมบริเวณอุปกรณ์/พอร์ต",
    "en": "Check for dust or foreign objects."
  },
  "Check HID-compliant touch screen Driver in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ HID-compliant touch screen หรือไม่",
    "en": "Check whether Device Manager detects HID-compliant touch screen."
  },
  "Check LAN pin / damage": {
    "th": "ตรวจสอบขา LAN และร่องรอยความเสียหาย",
    "en": "Check the LAN pins and any physical damage."
  },
  "Check Power Mode": {
    "th": "ตรวจสอบ Power Mode ใน Windows",
    "en": "Check Power Mode in Windows."
  },
  "Check Serial Port in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Serial Port หรือไม่",
    "en": "Check whether Device Manager detects Serial Port."
  },
  "Check Smart Card Reader in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Smart Card Reader หรือไม่",
    "en": "Check whether Device Manager detects Smart Card Reader."
  },
  "Check Task Manager usage": {
    "th": "เข้าหน้า Task Manager และตรวจสอบการทำงานของเครื่อง เช่น CPU/RAM/DISK วิ่ง 100% หรือไม่",
    "en": "Open Task Manager and check whether CPU/RAM/DISK usage reaches 100%."
  },
  "Check Task Manager Usage": {
    "th": "เข้าหน้า Task Manager และตรวจสอบการทำงานของเครื่อง เช่น CPU/RAM/DISK วิ่ง 100% หรือไม่",
    "en": "Open Task Manager and check whether CPU/RAM/DISK usage reaches 100%."
  },
  "Check Temperature": {
    "th": "ตรวจสอบอุณหภูมิของตัวเครื่องพบปัญหาเครื่องร้อนหรือไม่ และบริเวณใด",
    "en": "Check whether the machine overheats and identify the hot area."
  },
  "Check temperature / Overheat": {
    "th": "ตรวจสอบอุณหภูมิของตัวเครื่องพบปัญหาเครื่องร้อนหรือไม่ และบริเวณใด",
    "en": "Check whether the machine overheats and identify the hot area."
  },
  "Check USB Error in Device Manager": {
    "th": "ตรวจสอบ Error ของ USB ใน Device Manager",
    "en": "Check whether Device Manager detects USB Error."
  },
  "Check Wireless Driver in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Wireless หรือไม่",
    "en": "Check whether Device Manager detects Wireless."
  },
  "Check WWAN Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ WWAN หรือไม่",
    "en": "Check whether Device Manager detects WWAN."
  },
  "Clean camera lens": {
    "th": "ทำความสะอาดเลนส์กล้องแล้วทดสอบอีกครั้ง",
    "en": "Clean the camera lens and test again."
  },
  "Clean Cooling System": {
    "th": "ทำความสะอาดระบบระบายความร้อนแล้วทดสอบอีกครั้ง",
    "en": "Clean the cooling system and test again."
  },
  "Clean scroll wheel": {
    "th": "ทำความสะอาด Scroll Wheel แล้วทดสอบอีกครั้ง",
    "en": "Clean the scroll wheel and test again."
  },
  "Clean touchpad surface": {
    "th": "ทำความสะอาดพื้นผิว Touchpad แล้วทดสอบอีกครั้ง",
    "en": "Clean the touchpad surface and test again."
  },
  "ClickPad enabled": {
    "th": "ตรวจสอบว่า ClickPad เปิดใช้งานอยู่หรือไม่",
    "en": "Check whether ClickPad is enabled."
  },
  "CMOS battery / RTC check": {
    "th": "ตรวจสอบ CMOS Battery / RTC",
    "en": "Check CMOS battery / RTC check."
  },
  "Customer knows password": {
    "th": "ตรวจสอบว่าลูกค้าทราบรหัสผ่านเครื่องหรือไม่",
    "en": "Confirm whether the customer knows the machine password."
  },
  "Disable Touchpad test": {
    "th": "ปิด Touchpad แล้วทดสอบอาการอีกครั้ง",
    "en": "Disable Touchpad and test again."
  },
  "Disable UEFI IPv4 / IPv6": {
    "th": "ปิด UEFI IPv4 / IPv6 แล้วทดสอบอีกครั้ง",
    "en": "Disable UEFI IPv4 / IPv6 and test again."
  },
  "Display Backlight": {
    "th": "ตรวจสอบว่ามีแสงสว่างจากหลังหน้าจอหรือไม่",
    "en": "Check whether there is backlight from the display."
  },
  "Dock Firmware Update": {
    "th": "อัปเดต Firmware ของ Dock ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Dock firmware to the latest version."
  },
  "Driver / Firmware Update": {
    "th": "อัปเดต Driver หรือ Firmware ที่เกี่ยวข้องให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the related driver or firmware to the latest version."
  },
  "Driver / Windows Update": {
    "th": "อัปเดต Driver และ Windows ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the driver and Windows to the latest version."
  },
  "Dump File collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Dump file collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Emergency Reset": {
    "th": "ทดสอบ Reset Battery โดยจิ้มรูที่ใต้ตัวเครื่องประมาณ 5-10 วินาที จากนั้นเปิดเครื่องใหม่",
    "en": "Perform a battery reset by pressing the reset hole on the bottom cover for about 5-10 seconds, then turn the machine on again."
  },
  "Enable LAN in BIOS": {
    "th": "ตรวจสอบว่า LAN เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check whether LAN is enabled in BIOS."
  },
  "Error photo provided": {
    "th": "แนบรูป Error ที่พบเพิ่มเติม",
    "en": "Attach a photo of the error."
  },
  "Event Viewer / Dump file collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "External Mic Test": {
    "th": "ตรวจสอบหัวข้อ External Mic Test",
    "en": "Check External Mic Test."
  },
  "External Monitor test": {
    "th_no_display": "ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่",
    "th_display_issue": "ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "en_no_display": "Connect an external monitor and check whether the image appears.",
    "en_display_issue": "Connect an external monitor and check whether the same issue occurs.",
    "en": "For no display/no image symptoms, connect an external monitor and check whether the image appears. For display-quality symptoms, connect an external monitor and check whether the same issue occurs."
  },
  "Fan Check": {
    "th": "ตรวจสอบพัดลมหมุนหรือไม่",
    "en": "Check whether the fan is spinning."
  },
  "Fan spinning": {
    "th": "ตรวจสอบพัดลมหมุนหรือไม่",
    "en": "Check whether the fan is spinning."
  },
  "Fingerprint Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ Fingerprint ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Fingerprint driver to the latest version."
  },
  "Fingerprint setup in Windows Hello": {
    "th": "ตั้งค่า Fingerprint ใน Windows Hello ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Set up Fingerprint in Windows Hello again and test."
  },
  "FN & Ctrl Swap": {
    "th": "ตรวจสอบการตั้งค่า FN & Ctrl Swap",
    "en": "Check the FN & Ctrl Swap setting."
  },
  "FN Lock checked": {
    "th": "ตรวจสอบสถานะ FN Lock",
    "en": "Check FN Lock."
  },
  "Freeze occurs": {
    "th": "พบอาการเครื่องค้างช่วงใดบ้าง",
    "en": "Check whether Freeze occurs."
  },
  "FRU P/N": {
    "th": "ส่งภาพถ่ายอุปกรณ์ที่มีปัญหา ให้เห็น FRU P/N หรือ Barcode",
    "en": "Please send a photo of the affected accessory showing the FRU P/N or barcode."
  },
  "Graphics Driver Update": {
    "th": "อัปเดต Driver ของ Graphics ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Graphics driver to the latest version."
  },
  "HDMI Port on notebook test": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Headphone Test": {
    "th": "ทดสอบใช้งานร่วมกับหูฟังอื่น",
    "en": "Test with another headphone."
  },
  "Hotkey Driver Update": {
    "th": "อัปเดต Driver ของ Hotkey ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Hotkey driver to the latest version."
  },
  "Idepad → ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Idepad → ทดสอบ Run Diagnostics",
    "en": "Check Idepad → ทดสอบ Run Diagnostics."
  },
  "Input device selected correctly": {
    "th": "ตรวจสอบว่าเลือก Input Device ถูกต้อง",
    "en": "Check that the correct input device is selected."
  },
  "Input volume level checked": {
    "th": "ตรวจสอบระดับเสียง Input Volume",
    "en": "Check Input volume level."
  },
  "Intel RST / Storage Driver loaded": {
    "th": "โหลด Intel RST / Storage Driver ระหว่างติดตั้ง Windows แล้วทดสอบอีกครั้ง",
    "en": "Load Intel RST / Storage Driver during Windows installation and test again."
  },
  "Issue happens on all apps": {
    "th": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the issue occurs in all applications."
  },
  "Issue occurs all apps": {
    "th": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the issue occurs in all applications."
  },
  "Key stuck / sunk": {
    "th": "ตรวจสอบว่ามีปุ่มค้างหรือปุ่มยุบหรือไม่",
    "en": "Check whether any key is stuck or sunk."
  },
  "Keyboard / Touchpad affected by swollen battery": {
    "th": "ตรวจสอบว่า Keyboard หรือ Touchpad ได้รับผลจากแบตเตอรี่บวมหรือไม่",
    "en": "Check Keyboard / Touchpad affected by swollen battery."
  },
  "Keyboard backlight hotkey test": {
    "th": "ทดสอบปุ่มลัด Keyboard Backlight",
    "en": "Test the keyboard backlight hotkey."
  },
  "Keyboard Online Test": {
    "th": "ทดสอบ Keyboard ผ่าน Online Keyboard Test",
    "en": "Test the keyboard with an online keyboard tester."
  },
  "Keyboard test on other machine": {
    "th": "ทดสอบ Keyboard กับเครื่องอื่น",
    "en": "Test the Keyboard with another machine."
  },
  "LAN Driver Update": {
    "th": "อัปเดต Driver ของ LAN ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the LAN driver to the latest version."
  },
  "LAN Port on notebook test": {
    "th": "ทดสอบสาย LAN กับพอร์ต LAN ของเครื่องโดยตรง",
    "en": "Test the LAN cable directly with the machine LAN port."
  },
  "LED beside charging port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED beside port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED beside Type-C port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED on power button": {
    "th": "ตรวจสอบว่าไฟสถานะที่ปุ่มเปิด/ปิดติดหรือไม่",
    "en": "Check whether the power button status light turns on."
  },
  "Lenovo Diagnostics": {
    "th": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
  },
  "Lenovo Diagnostics Battery": {
    "th": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics to check the battery by following the steps for the machine model, then report whether the result is Pass or Failed."
  },
  "Lenovo Diagnostics Storage": {
    "th": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics to check storage by following the steps for the machine model, then report whether the result is Pass or Failed."
  },
  "Lenovo Hotkey Features update": {
    "th": "อัปเดต Lenovo Hotkey Features ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update Lenovo Hotkey Features to the latest version."
  },
  "Lenovo Vantage setting": {
    "th": "ตรวจสอบการตั้งค่าใน Lenovo Vantage",
    "en": "Check settings in Lenovo Vantage."
  },
  "Lenovo Vantage update": {
    "th": "ทดสอบอัปเดตไดรเวอร์ทั้งหมดผ่านโปรแกรม Lenovo Vantage",
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage → System Update → Check for updates."
  },
  "Lenovo Vantage Update": {
    "th": "ทดสอบอัปเดตไดรเวอร์ทั้งหมดผ่านโปรแกรม Lenovo Vantage",
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage → System Update → Check for updates."
  },
  "Load BIOS default": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check Load BIOS Default."
  },
  "Load BIOS Default": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check Load BIOS Default."
  },
  "Lock on leave setting enabled": {
    "th": "ตรวจสอบว่าเปิด Lock on leave setting หรือไม่",
    "en": "Check Lock on leave setting enabled."
  },
  "Microphone enhancement disabled": {
    "th": "ปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "en": "Disable Microphone Enhancement and test again."
  },
  "Minidump collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Monitor test on other machine": {
    "th": "ทดสอบจอภาพกับเครื่องอื่น",
    "en": "Test the Monitor with another machine."
  },
  "Mouse test": {
    "th": "ทดสอบการใช้งาน Mouse",
    "en": "Test mouse operation."
  },
  "Mouse test on other machine": {
    "th": "ทดสอบ Mouse กับเครื่องอื่น",
    "en": "Test the Mouse with another machine."
  },
  "Mouse works": {
    "th": "ตรวจสอบว่า Mouse ใช้งานได้หรือไม่",
    "en": "Check whether the mouse works."
  },
  "Move LCD lid": {
    "th": "ขยับฝาจอ LCD แล้วสังเกตว่าอาการเปลี่ยนหรือไม่",
    "en": "Move the LCD lid and check whether the symptom changes."
  },
  "Mute checked": {
    "th": "ตรวจสอบว่าไม่ได้ปิดเสียงอยู่",
    "en": "Check Mute."
  },
  "Network boot disabled": {
    "th": "ปิด Network Boot แล้วทดสอบอีกครั้ง",
    "en": "Disable Network Boot and test again."
  },
  "Noise occurs all apps": {
    "th": "ตรวจสอบว่าเสียงผิดปกติเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the noise occurs in all applications."
  },
  "Novo Button": {
    "th": "กด Novo Button แล้วตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "en": "Press the Novo Button and check whether the machine responds."
  },
  "On-Screen Keyboard test": {
    "th": "ทดสอบผ่าน On-Screen Keyboard",
    "en": "Test with On-Screen Keyboard."
  },
  "Original Adapter used": {
    "th": "ตรวจสอบว่าใช้งาน Adapter เดิมของเครื่องหรือไม่",
    "en": "Check whether the original adapter is being used."
  },
  "Other issue": {
    "th": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่",
    "en": "Check whether there are any additional issues."
  },
  "Output device selected correctly": {
    "th": "ตรวจสอบว่าเลือก Output Device ถูกต้อง",
    "en": "Check that the correct output device is selected."
  },
  "Password / PIN reset": {
    "th": "Reset Password หรือ PIN แล้วทดสอบอีกครั้ง",
    "en": "Reset Password or PIN and test again."
  },
  "Physical damage / Liquid spilled": {
    "th": "ตัวเครื่องมีรอยชำรุด เสียหาย หรือมีประวัติน้ำหกใส่หรือไม่",
    "en": "Check whether the machine has physical damage or any liquid spill history."
  },
  "Pixel location confirmed": {
    "th": "ระบุตำแหน่ง Pixel ที่พบปัญหา",
    "en": "Confirm the affected pixel location."
  },
  "Power LED": {
    "th": "ตรวจสอบว่าไฟสถานะที่ปุ่มเปิด/ปิดติดหรือไม่",
    "en": "Check whether the power button status light turns on."
  },
  "Power Reset": {
    "th": "ทดสอบเคลียร์ไฟ (Power reset) โดยสายชาร์จออก จากนั้นกดปุ่ม Power ค้างไว้ประมาณ 30 วินาที แล้วลองเปิดเครื่องใหม่อีกครั้ง",
    "en": "Perform a power reset: unplug the charger, press and hold the Power button for about 30 seconds, then try to turn the machine on again."
  },
  "Power Reset / Emergency Reset": {
    "th": "ตรวจสอบหัวข้อ Power Reset / Emergency Reset",
    "en": "Check Power Reset / Emergency Reset."
  },
  "Proof of ownership checked": {
    "th": "ตรวจสอบหลักฐานความเป็นเจ้าของเครื่อง",
    "en": "Check Proof of ownership."
  },
  "Windows Recovery": {
    "th": "ทดสอบ Windows Recovery โดยเลือกวิธีที่เหมาะสมกับอาการ เช่น Reset This PC, Startup Repair, System Restore หรือ Uninstall Updates",
    "en": "Perform Windows Recovery using the recovery option that best matches the issue, such as Reset This PC, Startup Repair, System Restore, or Uninstall Updates."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },
  "RTC battery / CMOS check": {
    "th": "ตรวจสอบ RTC Battery / CMOS",
    "en": "Check RTC battery / CMOS check."
  },
  "Run Lenovo Diagnostics": {
    "th": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
  },
  "Safe Mode Test": {
    "th": "เข้า Safe Mode แล้วทดสอบอาการอีกครั้ง",
    "en": "Enter Safe Mode and test again."
  },
  "SD Card Reader Driver Update": {
    "th": "อัปเดต Driver ของ SD Card Reader ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the SD Card Reader driver to the latest version."
  },
  "SD Card test on other machine": {
    "th": "ทดสอบ SD Card กับเครื่องอื่น",
    "en": "Test the SD Card with another machine."
  },
  "Secure Boot disabled": {
    "th": "ปิด Secure Boot แล้วทดสอบอีกครั้ง",
    "en": "Disable Secure Boot and test again."
  },
  "Serial Port Driver Update": {
    "th": "อัปเดต Driver ของ Serial Port ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Serial Port driver to the latest version."
  },
  "Set date and time in BIOS": {
    "th": "ตั้งค่าวันและเวลาใน BIOS ให้ถูกต้อง",
    "en": "Set the correct date and time in BIOS."
  },
  "SIM card detected": {
    "th": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "en": "Check whether the machine detects the SIM."
  },
  "SIM detected": {
    "th": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "en": "Check whether the machine detects the SIM."
  },
  "SIM tray damage": {
    "th": "ตรวจสอบว่า SIM Tray เสียหายหรือไม่",
    "en": "Check whether the SIM tray is damaged."
  },
  "Slow occurs / Freeze occurs": {
    "th": "พบอาการเครื่องช้าหรือค้างตอนไหนบ้าง",
    "en": "Check when the slow or freeze issue occurs."
  },
  "Smart Card Driver Update": {
    "th": "อัปเดต Driver ของ Smart Card ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Smart Card driver to the latest version."
  },
  "Specific hotkey listed": {
    "th": "ระบุปุ่ม Hotkey ที่มีปัญหาให้ครบถ้วน",
    "en": "List all affected hotkeys."
  },
  "Specific keys listed": {
    "th": "ระบุปุ่มที่มีปัญหาให้ครบถ้วน",
    "en": "List all affected keys."
  },
  "Stop code / Error code": {
    "th": "รบกวนส่งภาพถ่าพ Error code หรือ Stop code เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a photo of the Error Code or Stop Code for further checking."
  },
  "Stop code / Error code collected": {
    "th": "รบกวนส่งภาพถ่าพ Error code หรือ Stop code เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a photo of the Error Code or Stop Code for further checking."
  },
  "Storage Firmware Update": {
    "th": "อัปเดต Firmware ของ Storage ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update storage firmware to the latest version."
  },
  "Swap Power Cord": {
    "th": "ทดสอบสลับด้วย AC Power Cord อื่น",
    "en": "Test with another AC Power Cord."
  },
  "Swap Adapter": {
    "th": "ทดสอบสลับ Adapter อื่น ๆ",
    "en": "Test with another adapter."
  },
  "Swap Adapter / Power Cable": {
    "th": "ทดสอบสลับด้วย Adapter / Power Cable อื่น",
    "en": "Test with another Adapter / Power Cable."
  },
  "Swap App": {
    "th": "ทดสอบใช้งานด้วยแอปอื่น",
    "en": "Test with another App."
  },
  "Swap Audio Jack Port": {
    "th": "ทดสอบช่อง Audio Jack อื่น",
    "en": "Test with another Audio Jack Port."
  },
  "Swap Battery": {
    "th": "ทดสอบสลับด้วย Battery อื่น",
    "en": "Test with another Battery."
  },
  "Swap Bluetooth Device": {
    "th": "ทดสอบสลับด้วย Bluetooth Device อื่น",
    "en": "Test with another Bluetooth Device."
  },
  "Swap DisplayPort Cable": {
    "th": "ทดสอบสลับด้วย DisplayPort Cable อื่น",
    "en": "Test with another DisplayPort Cable."
  },
  "Swap DisplayPort cable": {
    "th": "ทดสอบสลับด้วย DisplayPort cable อื่น",
    "en": "Test with another DisplayPort cable."
  },
  "Swap Dock": {
    "th": "ทดสอบสลับด้วย Dock อื่น",
    "en": "Test with another Dock."
  },
  "Swap HDD": {
    "th": "ทดสอบสลับ HDD ตัวอื่น",
    "en": "Test with another HDD."
  },
  "Swap HDMI / DisplayPort cable": {
    "th": "ทดสอบสลับด้วย HDMI / DisplayPort cable อื่น",
    "en": "Test with another HDMI / DisplayPort cable."
  },
  "Swap HDMI cable": {
    "th": "ทดสอบสลับด้วย HDMI cable อื่น",
    "en": "Test with another HDMI cable."
  },
  "Swap HDMI Cable": {
    "th": "ทดสอบสลับด้วย HDMI Cable อื่น",
    "en": "Test with another HDMI Cable."
  },
  "Swap Headphone": {
    "th": "ทดสอบสลับด้วย Headphone อื่น",
    "en": "Test with another Headphone."
  },
  "Swap Keyboard": {
    "th": "ทดสอบสลับด้วย Keyboard อื่น",
    "en": "Test with another Keyboard."
  },
  "Swap LAN cable": {
    "th": "ทดสอบสลับด้วย LAN cable อื่น",
    "en": "Test with another LAN cable."
  },
  "Swap Monitor": {
    "th": "ทดสอบสลับด้วย Monitor อื่น",
    "en": "Test with another Monitor."
  },
  "Swap Mouse": {
    "th": "ทดสอบสลับด้วย Mouse อื่น",
    "en": "Test with another Mouse."
  },
  "Swap other Type-C port": {
    "th": "ทดสอบสลับช่องชาร์จ (Type-C) ช่องอื่น",
    "en": "Test charging with another Type-C port."
  },
  "Swap Power Cable": {
    "th": "ทดสอบสลับด้วย Power Cable อื่น",
    "en": "Test with another Power Cable."
  },
  "Swap Power Cord": {
    "th": "ทดสอบสลับด้วย Power Cord อื่น",
    "en": "Test with another Power Cord."
  },
  "Swap Power Outlet": {
    "th": "ทดสอบสลับด้วย Power Outlet อื่น",
    "en": "Test with another Power Outlet."
  },
  "Swap PSU": {
    "th": "ทดสอบสลับด้วย PSU อื่น",
    "en": "Test with another PSU."
  },
  "Swap RAM": {
    "th": "ทดสอบสลับ RAM ตัวอื่น",
    "en": "Test with another RAM module."
  },
  "Swap SD Card": {
    "th": "ทดสอบสลับด้วย SD Card อื่น",
    "en": "Test with another SD Card."
  },
  "Swap Serial Cable": {
    "th": "ทดสอบสลับสาย Serial อื่น",
    "en": "Test with another Serial Cable."
  },
  "Swap Serial Device": {
    "th": "ทดสอบสลับอุปกรณ์ Serial อื่น",
    "en": "Test with another Serial Device."
  },
  "Swap SIM": {
    "th": "ทดสอบสลับด้วย SIM อื่น",
    "en": "Test with another SIM."
  },
  "Swap Smart Card": {
    "th": "ทดสอบสลับด้วย Smart Card อื่น",
    "en": "Test with another Smart Card."
  },
  "Swap SSD": {
    "th": "ทดสอบสลับ SSD ตัวอื่น",
    "en": "Test with another SSD."
  },
  "Swap SSD / HDD": {
    "th": "ทดสอบสลับด้วย SSD / HDD อื่น",
    "en": "Test with another SSD / HDD."
  },
  "Swap Type-C port charge": {
    "th": "ทดสอบสลับด้วย Type-C port charge อื่น",
    "en": "Test with another Type-C port charge."
  },
  "Swap USB Device": {
    "th": "ทดสอบสลับด้วย USB Device อื่น",
    "en": "Test with another USB Device."
  },
  "Swap USB Port": {
    "th": "ทดสอบสลับด้วย USB Port อื่น",
    "en": "Test with another USB Port."
  },
  "Swap USB-A Port": {
    "th": "ทดสอบสลับด้วย USB-A Port อื่น",
    "en": "Test with another USB-A Port."
  },
  "Swap USB-C cable": {
    "th": "ทดสอบสลับด้วย USB-C cable อื่น",
    "en": "Test with another USB-C cable."
  },
  "Swap USB-C Cable": {
    "th": "ทดสอบสลับด้วย USB-C Cable อื่น",
    "en": "Test with another USB-C Cable."
  },
  "Swap USB-C Port": {
    "th": "ทดสอบสลับด้วย USB-C Port อื่น",
    "en": "Test with another USB-C Port."
  },
  "Swap VGA cable": {
    "th": "ทดสอบสลับด้วย VGA cable อื่น",
    "en": "Test with another VGA cable."
  },
  "Swap VGA Cable": {
    "th": "ทดสอบสลับด้วย VGA Cable อื่น",
    "en": "Test with another VGA Cable."
  },
  "Swap Wi-Fi / Hotspot": {
    "th": "ทดสอบสลับด้วย Wi-Fi / Hotspot อื่น",
    "en": "Test with another Wi-Fi / Hotspot."
  },
  "System Restore": {
    "th": "ทดสอบ System Restore",
    "en": "Perform System Restore / Reset This PC: Choose an option → Troubleshoot → Advanced options → Reset This PC, then choose Keep my files or Remove everything and follow the on-screen steps."
  },
  "Test HDMI Port on Notebook": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Test Tiny without TIO Dock": {
    "th": "ทดสอบเครื่อง Tiny โดยไม่ต่อผ่าน TIO Dock",
    "en": "Test the Tiny without the TIO Dock."
  },
  "Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics",
    "en": "Check Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics."
  },
  "Thunderbolt Driver Update": {
    "th": "อัปเดต Driver ของ Thunderbolt ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Thunderbolt driver to the latest version."
  },
  "Touchpad Driver Update": {
    "th": "อัปเดต Driver ของ Touchpad ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Touchpad driver to the latest version."
  },
  "Touchpad enabled in Settings": {
    "th": "ตรวจสอบว่า Touchpad เปิดใช้งานใน Settings",
    "en": "Check whether Touchpad is enabled in Settings."
  },
  "TrackPoint Driver Update": {
    "th": "อัปเดต Driver ของ TrackPoint ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the TrackPoint driver to the latest version."
  },
  "TrackPoint enabled in BIOS": {
    "th": "ตรวจสอบว่า TrackPoint เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check whether TrackPoint is enabled in BIOS."
  },
  "Uninstall Audio Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Audio แล้ว Restart เครื่อง",
    "en": "Uninstall the Audio driver, then restart the machine."
  },
  "Uninstall Bluetooth Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Bluetooth แล้ว Restart เครื่อง",
    "en": "Uninstall the Bluetooth driver, then restart the machine."
  },
  "Uninstall Camera Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Camera แล้ว Restart เครื่อง",
    "en": "Uninstall the Camera driver, then restart the machine."
  },
  "Uninstall Fingerprint Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Fingerprint แล้ว Restart เครื่อง",
    "en": "Uninstall the Fingerprint driver, then restart the machine."
  },
  "Uninstall HID-compliant touch screen Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ HID-compliant touch screen แล้ว Restart เครื่อง",
    "en": "Uninstall the HID-compliant touch screen driver, then restart the machine."
  },
  "Uninstall Wireless Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Wireless แล้ว Restart เครื่อง",
    "en": "Uninstall the Wireless driver, then restart the machine."
  },
  "USB Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ USB ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the USB driver to the latest version."
  },
  "USB Keyboard test": {
    "th": "ทดสอบด้วย USB Keyboard",
    "en": "Test with a USB keyboard."
  },
  "USB Mouse / Keyboard test": {
    "th": "ทดสอบด้วย USB Mouse หรือ USB Keyboard",
    "en": "Test with a USB mouse or keyboard."
  },
  "USB to LAN Adapter test": {
    "th": "ทดสอบด้วย USB to LAN Adapter",
    "en": "Test with a USB to LAN adapter."
  },
  "Voice Recorder Test": {
    "th": "ทดสอบบันทึกเสียงผ่าน Voice Recorder",
    "en": "Test recording with Voice Recorder."
  },
  "Volume level checked": {
    "th": "ตรวจสอบระดับเสียง",
    "en": "Check Volume level."
  },
  "Volume Mixer checked": {
    "th": "ตรวจสอบ Volume Mixer",
    "en": "Check Volume Mixer."
  },
  "WLAN Driver Update": {
    "th": "อัปเดต Driver ของ Wi-Fi ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Wi-Fi driver to the latest version."
  },
  "Wi-Fi test": {
    "th": "ทดสอบเชื่อมต่อ Wi-Fi",
    "en": "Test Wi-Fi connection."
  },
  "Windows Hello Face setup": {
    "th": "ตั้งค่า Windows Hello Face ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Set up Windows Hello Face again and test."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },

  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง Windows ใหม่",
    "en": "Please test by re-installing Windows."
  },

  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง Windows ใหม่",
    "en": "Please test by re-installing Windows."
  },
  "Re-install Windows USB recreated": {
    "th": "สร้าง USB ติดตั้ง Windows ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Recreate the Windows installation USB and test again."
  },
  "Windows update": {
    "th": "ทดสอบอัปเดต Windows ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update Windows to the latest version."
  },
  "Windows Update": {
    "th": "ตรวจสอบหัวข้อ Windows Update",
    "en": "Check Windows Update."
  },
  "WLAN / WWAN card changed before issue": {
    "th": "ตรวจสอบว่ามีการเปลี่ยน WLAN / WWAN card ก่อนเกิดอาการหรือไม่",
    "en": "Check whether the WLAN / WWAN card was changed before the issue occurred."
  },
  "WWAN Driver Update": {
    "th": "อัปเดต Driver ของ WWAN ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the WWAN driver to the latest version."
  },
  "XXX Driver Update": {
    "th": "ทดสอบอัปเดตไรเวอร์ที่มีปัญหา",
    "en": "Update the affected driver."
  },
  "กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่",
    "en": "Check กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่."
  },
  "กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "en": "Check กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่."
  },
  "หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP": {
    "th": "ตรวจสอบหัวข้อ หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP",
    "en": "Check หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP."
  },
  "โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น": {
    "th": "ตรวจสอบหัวข้อ โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น",
    "en": "Check โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น."
  },
  "โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้": {
    "th": "ตรวจสอบหัวข้อ โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้",
    "en": "Check โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้."
  },
  "โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates": {
    "th": "ตรวจสอบหัวข้อ โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates",
    "en": "Check โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates."
  }
};

(function applyV495GlobalChecklistMappingAudit(){
  function canonicalLabel(label){
    const map = {
      'LED beside charging port':'Charge LED',
      'LED beside Type-C port':'Charge LED',
      'LED beside port':'Charge LED',
      'LED on power button':'Power LED',
      'Can Access Windows':'Can access Windows',
      'Check Task Manager usage':'Check Task Manager Usage',
      'Check Temperature':'Check temperature / Overheat',
      'Re-install Windows':'Re-install Windows',
      'Re-install Windows':'Re-install Windows',
      'Lenovo Vantage update':'Lenovo Vantage Update',
      'BIOS update':'BIOS Update',
      'Windows update':'Windows Update',
      'System Restore':'Windows Recovery',
      'Lenovo Diagnostics':'Run Lenovo Diagnostics',
      'Dump File collected':'Event Viewer / Dump file collected',
      'Dump file collected':'Event Viewer / Dump file collected',
      'Minidump collected':'Event Viewer / Dump file collected',
      'Stop code / Error code':'Stop code / Error code collected',
      'Fan Check':'Fan Check',
      'Caps Lock LED works':'Caps Lock Toggle',
      'Update Graphics Driver':'Graphics Driver Update',
      'Wi-Fi Driver Update':'WLAN Driver Update',
      'Wifi Driver Update':'WLAN Driver Update',
      'WIFI Driver Update':'WLAN Driver Update',
      'Camera Driver Update / Lenovo Vantage':'Camera Driver Update',
      'Fingerprint Driver Update / Lenovo Vantage':'Fingerprint Driver Update',
      'USB Driver Update / Lenovo Vantage':'USB Driver Update'
    };
    return map[label] || label;
  }
  function normalizeQuestion(q){
    const out = Object.assign({}, q);
    const original = out.label;
    out.label = canonicalLabel(out.label);
    const mappingKey = GLOBAL_CHECKLIST_MAPPING[out.label] ? out.label : (GLOBAL_CHECKLIST_MAPPING[original] ? original : null);
    if(mappingKey) out.mappingKey = mappingKey;
    if(out.label === 'Run Lenovo Diagnostics') out.options = 'diag';
    if(out.label === 'Can access Windows' || out.label === 'Can Access BIOS' || out.label === 'Can Access Safe Mode' || out.label === 'Physical damage / Liquid spilled' || out.label === 'Other issue') out.options = out.options || 'yesno';
    return out;
  }
  function dedupe(list){
    const seen = new Set();
    const out = [];
    (list || []).forEach(q => {
      const n = normalizeQuestion(q);
      if(seen.has(n.label)) return;
      seen.add(n.label);
      out.push(n);
    });
    return out;
  }
  function normalizeTail(list){
    let out = dedupe(list);
    const tailOrder = ['Event Viewer / Dump file collected','Physical damage / Liquid spilled','Other issue','FRU P/N'];
    const tails = [];
    tailOrder.forEach(label => {
      const idx = out.findIndex(q => q.label === label);
      if(idx >= 0) tails.push(out.splice(idx,1)[0]);
    });
    return out.concat(tails);
  }
  Object.entries(LEVELS).forEach(([levelKey, level]) => {
    Object.entries(level.symptoms || {}).forEach(([symKey, sym]) => {
      if(Array.isArray(sym.common)) sym.common = normalizeTail(sym.common);
      if(sym.questions && typeof sym.questions === 'object'){
        Object.keys(sym.questions).forEach(product => {
          if(Array.isArray(sym.questions[product])) sym.questions[product] = normalizeTail(sym.questions[product]);
        });
      }
    });
  });
})();


// v4.9.8 Model Scope Guard
// User-approved rule: Swap RAM / Swap SSD / Swap HDD are ThinkCentre Desktop-only checklist items.
// They must be removed from ThinkPad, IdeaPad, ThinkCentre Tiny, and AIO in checklist display, Email TH/EN, Generate Note, and export/copy output.
// This runtime guard prevents shared COMMON checklists from leaking internal hardware swap steps into non-Desktop models.
const DESKTOP_ONLY_CHECKLIST_LABELS = new Set([
  "Swap RAM",
  "Swap SSD",
  "Swap HDD",
  "Swap SSD / HDD"
]);
function filterChecklistByModelScope(qs, product){
  if(product === "desktop") return qs;
  return (qs || []).filter(q => !DESKTOP_ONLY_CHECKLIST_LABELS.has(q.label));
}


// v4.9.8 Final Full Impact Audit Patch
// - Windows Recovery is the standard checklist term replacing legacy System Restore checklist usage.
// - Related Guide for Windows Recovery points to four separate guide files: Reset This PC, Startup Repair, System Restore, Uninstall Updates.
// - Swap RAM / Swap SSD / Swap HDD / Swap SSD / HDD remain ThinkCentre Desktop-only.
// - Not Test is the only approved dropdown wording for untested items.
(function applyV498FinalFullImpactAudit(){
  if(typeof GLOBAL_CHECKLIST_MAPPING !== 'undefined'){
    GLOBAL_CHECKLIST_MAPPING['Windows Recovery'] = {
      th: 'ทดสอบ Windows Recovery โดยเลือกวิธีที่เหมาะสมกับอาการ เช่น Reset This PC, Startup Repair, System Restore หรือ Uninstall Updates',
      en: 'Perform Windows Recovery using the most appropriate recovery option for the issue, such as Reset This PC, Startup Repair, System Restore, or Uninstall Updates.'
    };
    GLOBAL_CHECKLIST_MAPPING['System Restore'] = GLOBAL_CHECKLIST_MAPPING['Windows Recovery'];
    GLOBAL_CHECKLIST_MAPPING['Battery Health in Lenovo Vantage'] = {
      th: 'ตรวจสอบ Battery Health ใน Lenovo Vantage และเลือกผลลัพธ์: Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test',
      en: 'Check Battery Health in Lenovo Vantage and select the result: Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test.'
    };
  }

  const recoveryGuideOrder = ['reset_pc','startup_repair','system_restore','uninstall_updates'];
  if(typeof RELATED_GUIDES !== 'undefined'){
    Object.keys(RELATED_GUIDES).forEach(levelKey => {
      Object.keys(RELATED_GUIDES[levelKey] || {}).forEach(symKey => {
        const arr = RELATED_GUIDES[levelKey][symKey] || [];
        if(arr.includes('reinstall_windows') || arr.some(x => recoveryGuideOrder.includes(x))){
          const nonRecovery = arr.filter(x => !recoveryGuideOrder.includes(x));
          const withoutReinstall = nonRecovery.filter(x => x !== 'reinstall_windows');
          const hasReinstall = nonRecovery.includes('reinstall_windows');
          RELATED_GUIDES[levelKey][symKey] = Array.from(new Set(withoutReinstall.concat(recoveryGuideOrder).concat(hasReinstall ? ['reinstall_windows'] : [])));
        }
      });
    });
  }

  function normalizeChecklistItem(q){
    if(!q || !q.label) return q;
    if(q.label === 'System Restore') q.label = 'Windows Recovery';
    if(q.label === 'Reinstall Windows' || q.label === 'Windows Installation' || q.label === 'Install Windows') q.label = 'Re-install Windows';
    if(q.label === 'Lenovo Diagnostics') q.label = 'Run Lenovo Diagnostics';
    return q;
  }
  if(typeof LEVELS !== 'undefined'){
    Object.keys(LEVELS).forEach(levelKey => {
      const level = LEVELS[levelKey];
      Object.keys(level.symptoms || {}).forEach(symKey => {
        const sym = level.symptoms[symKey];
        if(Array.isArray(sym.common)) sym.common.forEach(normalizeChecklistItem);
        if(sym.questions && typeof sym.questions === 'object'){
          Object.keys(sym.questions).forEach(product => {
            if(Array.isArray(sym.questions[product])) sym.questions[product].forEach(normalizeChecklistItem);
          });
        }
      });
    });
  }
})();



(function applyV502UserRequestedPatch(){
  function getSym(level, symptom){ return LEVELS && LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom]; }
  const storageInstall = getSym('storage','ssd_not_detect_windows_setup');
  if(storageInstall) storageInstall.name = 'SSD Not Found During Install OS';
  if(typeof GUIDE_ORDER !== 'undefined' && Array.isArray(GUIDE_ORDER) && !GUIDE_ORDER.includes('downgrade_bios')){
    const idx = GUIDE_ORDER.indexOf('uninstall_updates');
    if(idx >= 0) GUIDE_ORDER.splice(idx + 1, 0, 'downgrade_bios');
    else GUIDE_ORDER.push('downgrade_bios');
  }
  if(typeof GLOBAL_CHECKLIST_MAPPING !== 'undefined'){
    GLOBAL_CHECKLIST_MAPPING['Uninstall Windows Update'] = {
      th: 'ถอนการติดตั้ง Windows Update ล่าสุด ทั้งกรณีเข้า Windows ได้ผ่าน Settings → Windows Update → Update history → Uninstall updates หรือกรณีเข้า Windows ไม่ได้ผ่าน WinRE → Troubleshoot → Advanced options → Uninstall Updates',
      en: 'Uninstall the latest Windows Update from Settings → Windows Update → Update history → Uninstall updates, or from WinRE → Troubleshoot → Advanced options → Uninstall Updates if Windows cannot boot.'
    };
    GLOBAL_CHECKLIST_MAPPING['Downgrade BIOS'] = {
      th: 'ดาวน์โหลด BIOS Version ก่อนหน้าโดยคลิกขวาที่ Download เลือก Copy link เปิด README หา Package ID ของ Version ก่อนหน้า แล้วแก้ชื่อไฟล์ BIOS ท้ายลิงก์พร้อมเติม .exe',
      en: 'Download the previous BIOS version by right-clicking Download, copying the link, checking the README for the previous Package ID, then replacing the BIOS file name at the end of the link and adding .exe.'
    };
  }
})();

// v5.0.1 User Requested Full Impact Patch
// - Tiny No power: Swap Power Cord -> Swap Adapter
// - Mouse > Scroll mouse not work: remove Swap App / Clean scroll wheel, add Swap Mouse
// - ThinkPad Battery email/checklist cleanup
// - USB-C Display: remove Windows Update
// - Keyboard symptom names: Few key not work / All key not work
// - Fan Noise: remove Clean Cooling System
// - Guide rename/content: SSD Not Found During Install OS
(function applyV501UserRequestedPatch(){
  function makeQ(label, options, extra){ return Object.assign({label:label, options:options||'select', text:false, diag:false}, extra||{}); }
  function getSym(level, symptom){ return LEVELS && LEVELS[level] && LEVELS[level].symptoms && LEVELS[level].symptoms[symptom]; }
  function filterLabels(list, labels){ return (list||[]).filter(q => q && !labels.includes(q.label)); }
  function replaceLabel(list, from, to){ (list||[]).forEach(q => { if(q && q.label === from) q.label = to; }); return list; }
  function editQuestionArrays(sym, fn){
    if(!sym) return;
    if(Array.isArray(sym.common)) sym.common = fn(sym.common);
    if(sym.questions && typeof sym.questions === 'object') Object.keys(sym.questions).forEach(k => { if(Array.isArray(sym.questions[k])) sym.questions[k] = fn(sym.questions[k]); });
  }

  const noPower = getSym('boot','no_power');
  if(noPower && noPower.questions && Array.isArray(noPower.questions.tiny)){
    noPower.questions.tiny = replaceLabel(noPower.questions.tiny, 'Swap Power Cord', 'Swap Adapter');
  }

  const mouseScroll = getSym('mouse','scroll');
  if(mouseScroll){
    mouseScroll.common = [
      makeQ('Swap Mouse','swap'),
      makeQ('Mouse test on other machine','swap'),
      makeQ('Physical damage / Liquid spilled','yesno'),
      makeQ('Other issue','yesno',{text:true}),
      makeQ('FRU P/N','detail_only',{text:true})
    ];
  }

  const runtime = getSym('charging','runtime');
  const slowCharge = getSym('charging','slow_charge');
  const notDetect = getSym('charging','not_detect');
  editQuestionArrays(slowCharge, qs => filterLabels(qs, ['Battery Conservation Mode']));
  editQuestionArrays(notDetect, qs => filterLabels(qs, ['Adapter test']));

  const usbcDisplay = getSym('port','usbc_display');
  editQuestionArrays(usbcDisplay, qs => filterLabels(qs, ['Windows Update']));

  const few = getSym('keyboard','few'); if(few) few.name = 'Few key not work';
  const all = getSym('keyboard','all'); if(all) all.name = 'All key not work';

  const fanNoise = getSym('fan','noise') || getSym('fan','fan_noise');
  editQuestionArrays(fanNoise, qs => filterLabels(qs, ['Clean Cooling System']));

  if(typeof GLOBAL_CHECKLIST_MAPPING !== 'undefined'){
    GLOBAL_CHECKLIST_MAPPING['Battery Health in Lenovo Vantage'] = {
      th: 'รบกวนส่ง Battery Health โดยเปิด Lenovo Vantage -> Device -> Power -> ตรวจสอบหัวข้อ Battery Health',
      en: 'Check Battery Health in Lenovo Vantage by opening Lenovo Vantage -> Device -> Power -> Battery Health.'
    };
  }

  if(typeof TROUBLESHOOTING_GUIDES !== 'undefined' && TROUBLESHOOTING_GUIDES.storage && TROUBLESHOOTING_GUIDES.storage.thinkcentre_raid1_ssd_not_found_os_install){
    const g = TROUBLESHOOTING_GUIDES.storage.thinkcentre_raid1_ssd_not_found_os_install;
    g.name = 'SSD Not Found During Install OS';
    g.guide = 'SSD Not Found During Install OS\n\nอาการ\n- Windows Setup ไม่พบ SSD\n- ขึ้นข้อความ "No drives were found."\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ตรวจสอบการตั้งค่า Storage Controller ใน BIOS\nตรวจสอบโหมดการทำงานของ Storage Controller ให้ตรงกับรุ่นเครื่อง เช่น\n- AHCI\n- Intel VMD\n- Intel RST / RAID\n\n3. ดาวน์โหลด Intel RST / Storage Driver\nโดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n4. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ "Where do you want to install Windows?" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่';
    g.emailTH = 'เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nSSD Not Found During Install OS\n\nอาการ\n- Windows Setup ไม่พบ SSD\n- ขึ้นข้อความ "No drives were found."\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ตรวจสอบการตั้งค่า Storage Controller ใน BIOS\nตรวจสอบโหมดการทำงานของ Storage Controller ให้ตรงกับรุ่นเครื่อง เช่น\n- AHCI\n- Intel VMD\n- Intel RST / RAID\n\n3. ดาวน์โหลด Intel RST / Storage Driver\nโดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n4. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ "Where do you want to install Windows?" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';
    g.emailEN = 'Dear Customer,\n\nPlease follow the guide below.\n\nSSD Not Found During Install OS\n\nSymptoms\n- Windows Setup cannot detect the SSD.\n- The message "No drives were found." appears.\n\nTroubleshooting\n\n1. Verify whether the SSD is detected in BIOS.\n- Enter BIOS and check whether the SSD is detected.\n- If BIOS does not detect the SSD, follow the SSD Not Detected troubleshooting guide.\n\n2. Check the Storage Controller setting in BIOS.\nVerify that the Storage Controller mode matches the machine platform, such as AHCI, Intel VMD, or Intel RST / RAID.\n\n3. Download Intel RST / Storage Driver by using another PC.\n- Go to Lenovo Support.\n- Download the Intel RST / Storage Driver that matches the machine model.\n- Extract the downloaded package.\n- Copy the extracted driver files to a USB Flash Drive.\n\n4. Load the driver during Windows Setup.\n- On the "Where do you want to install Windows?" screen, select Load driver.\n- Browse to the USB Flash Drive.\n- Select the Intel RST / Storage Driver.\n- After the driver loads successfully, verify whether the SSD appears.\n\nOnce completed, please provide the result back to us.';
  }
})();


// v5.0.4 data corrections and additions
(function(){
  function q(label, options, extra){ return Object.assign({label:label, options:options, text:false, diag:false}, extra || {}); }

  // Fan Checklist standard: Fan Check / No Spin / Spin / Not Test.
  if(typeof APP_OPTIONS !== 'undefined') APP_OPTIONS.fan = ['-- Select --','No Spin','Spin','Not Test'];
  function updateFanQuestions(value){
    if(Array.isArray(value)){
      value.forEach(function(item){
        if(item && typeof item === 'object'){
          if(item.label === 'Fan spinning') item.label = 'Fan Check';
          if(item.label === 'Fan Check') item.options = 'fan';
          Object.keys(item).forEach(function(k){ if(k !== 'label') updateFanQuestions(item[k]); });
        }
      });
    } else if(value && typeof value === 'object'){
      Object.keys(value).forEach(function(k){ updateFanQuestions(value[k]); });
    }
  }
  if(typeof LEVELS !== 'undefined') updateFanQuestions(LEVELS);

  // Error 0183 Bad CRC.
  if(LEVELS && LEVELS.error && LEVELS.error.symptoms){
    LEVELS.error.symptoms.e0183 = {
      name: 'Error 0183 : Bad CRC of Security Settings in EFI Variable',
      defaultResult: 'Escalate L2',
      defaultPart: 'Mainboard',
      common: [
        q('Load BIOS Default','select'),
        q('BIOS Update','select'),
        q('Error photo provided','yesno'),
        q('Other issue','yesno',{text:true})
      ],
      description: 'BIOS ตรวจพบค่า CRC ของข้อมูล Security Settings ใน EFI Variable ไม่ถูกต้อง อาจเกี่ยวข้องกับข้อมูล BIOS หรือ Mainboard'
    };

    LEVELS.error.symptoms.button_cover_tamper = {
      name: 'Button cover tamper detection',
      defaultResult: 'Escalate L2',
      defaultPart: 'Mainboard / Cover Sensor',
      common: [
        q('Load BIOS Default','select'),
        q('BIOS Update','select'),
        q('Check bottom cover and screws','select'),
        q('Error photo provided','yesno'),
        q('Other issue','yesno',{text:true})
      ],
      description: 'ระบบตรวจพบสถานะการเปิดฝาครอบเครื่องหรือสัญญาณจาก Cover Tamper Sensor ผิดปกติ'
    };
  }

  // Insert new errors before Boot Device Missing for every product.
  if(typeof MODEL_STRUCTURE !== 'undefined'){
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var row=(MODEL_STRUCTURE[product]||[]).find(function(x){return x.level==='error';});
      if(!row) return;
      var arr=(row.symptoms||[]).filter(function(x){return x!=='e0183' && x!=='button_cover_tamper';});
      var at=arr.indexOf('boot_missing');
      if(at<0) at=arr.length;
      arr.splice(at,0,'e0183','button_cover_tamper');
      row.symptoms=arr;
    });
  }

  var manuals = LEVELS && LEVELS.manual && LEVELS.manual.symptoms;
  if(manuals){
    var diag = 'Lenovo Diagnostics (ผ่าน Lenovo Vantage)\n1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage\n2. ไปที่ Device Diagnostics → Hardware Scan → Quick Scan → จากนั้นกด Scan\nตรวจสอบผลว่า Pass หรือ Failed\n\nLenovo Diagnostics (ผ่าน F10)\n1. ปิดเครื่อง\n2. เปิดเครื่องแล้วกด F10 รัว ๆ\n3. เลือก Run All → Quick → Quick Unattended\nรอให้ทดสอบเสร็จ และตรวจสอบผลว่า Pass หรือ Failed';
    manuals.lenovo_diagnostics.guide = diag;
    manuals.lenovo_diagnostics.emailTH = 'เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n' + diag + '\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';
    manuals.lenovo_diagnostics.emailEN = 'Dear Customer,\n\nPlease run Lenovo Diagnostics through Lenovo Vantage or by pressing F10 during startup, then provide the result as Pass or Failed.';

    var battery = 'Battery Health\n\n1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage\n2. ไปที่ Device → Power → ตรวจสอบหัวข้อ Battery Health\nแจ้งผลที่แสดง เช่น Good / Fair / Poor พร้อมส่งภาพหน้าจอ';
    manuals.battery_health.guide = battery;
    manuals.battery_health.emailTH = 'เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n' + battery + '\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';

    var resetpc = 'Reset This PC\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Reset This PC\n3. เลือก Keep my files หรือ Remove everything\n4. ทำตามขั้นตอนจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Reset This PC\n4. เลือก Keep my files หรือ Remove everything\n5. ทำตามขั้นตอนจนเสร็จ';
    manuals.reset_pc.guide=resetpc; manuals.reset_pc.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+resetpc+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';

    var startup = 'Startup Repair\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Advanced startup → Restart now\n3. เลือก Troubleshoot → Advanced options → Startup Repair\n4. รอให้ระบบซ่อมแซมจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Advanced options → Startup Repair\n4. รอให้ระบบซ่อมแซมจนเสร็จ';
    manuals.startup_repair.guide=startup; manuals.startup_repair.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+startup+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';

    var restore = 'System Restore\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Advanced startup → Restart now\n3. เลือก Troubleshoot → Advanced options → System Restore\n4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Advanced options → System Restore\n4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ';
    manuals.system_restore.guide=restore; manuals.system_restore.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+restore+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';

    var always = 'วิธีตั้งค่า Always On USB\n\nกรณีปิดด้วยโปรแกรม Lenovo Commercial Vantage\n1. เปิด Lenovo Commercial Vantage\n2. ไปที่ Device → Power → Always On USB → จากนั้นตั้งเป็น Off\n3. Restart เครื่อง 1 ครั้ง แล้วทดสอบใช้งานอีกครั้ง\n\nวิธีปิดด้วย BIOS\n1. เข้า BIOS โดยกด F1 รัวๆขณะเปิดเครื่อง\n2. ไปที่ Config → USB → Always On USB → จากนั้นตั้งเป็น Off\n3. กด F10 และเลือก Yes เพื่อ Save';
    manuals.always_on_usb.guide=always; manuals.always_on_usb.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+always+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';
  }
})();


// v5.0.4 approved content and standardization patch
(function applyV504ApprovedPatch(){
  function errorCode(name){
    var m=String(name||'').match(/\b(\d{3,4})\b/);
    return m ? parseInt(m[1],10) : null;
  }
  // Error headings: remove "Error" prefix; numeric entries ascending; non-numeric entries last.
  if(typeof LEVELS!=='undefined' && LEVELS.error && LEVELS.error.symptoms){
    Object.keys(LEVELS.error.symptoms).forEach(function(k){
      var x=LEVELS.error.symptoms[k];
      if(!x) return;
      x.name=String(x.name||'').replace(/^Error\s*/i,'').replace(/^([0-9]{3,4})\s*:\s*/,'$1 ');
    });
  }
  if(typeof MODEL_STRUCTURE!=='undefined'){
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var row=(MODEL_STRUCTURE[product]||[]).find(function(x){return x.level==='error';});
      if(!row) return;
      row.symptoms=(row.symptoms||[]).slice().sort(function(a,b){
        var na=LEVELS.error.symptoms[a]&&LEVELS.error.symptoms[a].name;
        var nb=LEVELS.error.symptoms[b]&&LEVELS.error.symptoms[b].name;
        var ca=errorCode(na), cb=errorCode(nb);
        if(ca!==null && cb!==null) return ca-cb || String(na).localeCompare(String(nb));
        if(ca!==null) return -1;
        if(cb!==null) return 1;
        return String(na).localeCompare(String(nb));
      });
    });
  }

  var manuals=LEVELS&&LEVELS.manual&&LEVELS.manual.symptoms;
  if(manuals){
    var ssd='SSD Not Found During Install OS\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ดาวน์โหลด Intel RST / Storage Driver โดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n3. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ "Where do you want to install Windows?" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่';
    var sg=manuals.thinkcentre_raid1_ssd_not_found_os_install;
    if(sg){sg.name='SSD Not Found During Install OS';sg.guide=ssd;sg.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+ssd+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';}

    var down='Downgrade BIOS\n\nวัตถุประสงค์\nดาวน์โหลด BIOS Version ก่อนหน้าเพื่อนำมา Downgrade BIOS\n\nวิธีดาวน์โหลด BIOS Version ก่อนหน้า\n\n1. เข้า Lenovo Support ตามรุ่นเครื่อง แล้วไปที่ BIOS/UEFI\n2. เปิด Details ของ BIOS ล่าสุด และ Copy Link จากปุ่ม Download\n3. เปิดไฟล์ README ของ BIOS รุ่นล่าสุด\n4. หา Package ID ของ BIOS Version ที่ต้องการ เช่น r26uj15w\n5. นำ Link ที่ Copy มา แก้เฉพาะชื่อไฟล์ท้าย Link ให้เป็น Package ID ที่ต้องการ แล้วกด Enter\n\nตัวอย่าง\nLatest\nhttps://download.lenovo.com/pccbbs/mobiles/r26uj16w.exe\n\nPrevious\nhttps://download.lenovo.com/pccbbs/mobiles/r26uj15w.exe\n\nหมายเหตุ\n- ใช้ Package ID จาก README เท่านั้น\n- วิธีนี้ใช้ได้เฉพาะ BIOS ที่ยังอยู่บน Server ของ Lenovo\n- ก่อน Downgrade ให้ตรวจสอบ AC Adapter, Battery, BitLocker และ BIOS Back Flash\n- หลัง Downgrade ให้ Load BIOS Default และ Restart เครื่อง';
    if(manuals.downgrade_bios){manuals.downgrade_bios.guide=down;manuals.downgrade_bios.emailTH='เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\n'+down+'\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ';}
  }

  // Also update the storage guide object used by Related Guide.
  if(typeof TROUBLESHOOTING_GUIDES!=='undefined' && TROUBLESHOOTING_GUIDES.storage && TROUBLESHOOTING_GUIDES.storage.thinkcentre_raid1_ssd_not_found_os_install){
    var g=TROUBLESHOOTING_GUIDES.storage.thinkcentre_raid1_ssd_not_found_os_install;
    var m=LEVELS.manual.symptoms.thinkcentre_raid1_ssd_not_found_os_install;
    if(m){g.name=m.name;g.guide=m.guide;g.emailTH=m.emailTH;}
  }
})();


// v5.0.6 approved symptom placement and checklist consistency patch
(function applyV506Patch(){
  function findRow(product, level){
    return (MODEL_STRUCTURE[product] || []).find(function(row){ return row.level === level; });
  }
  function removeAll(arr, key){ return (arr || []).filter(function(x){ return x !== key; }); }
  function placeFirst(arr, key){ arr=removeAll(arr,key); arr.unshift(key); return arr; }
  function placeLast(arr, key){ arr=removeAll(arr,key); arr.push(key); return arr; }

  // 1) Novo Button dropdown: Same Issue / Work Fine / Not Test.
  APP_OPTIONS.novo_button = ['-- Select --','Same Issue','Work Fine','Not Test'];
  (function walk(value){
    if(Array.isArray(value)){
      value.forEach(function(item){
        if(item && typeof item === 'object'){
          if(item.label === 'Novo Button') item.options = 'novo_button';
          Object.keys(item).forEach(function(k){ if(k !== 'label') walk(item[k]); });
        }
      });
    } else if(value && typeof value === 'object'){
      Object.keys(value).forEach(function(k){ walk(value[k]); });
    }
  })(LEVELS);

  // 2) Move Black screen after login from Windows to Boot for every model.
  if(LEVELS.windows && LEVELS.windows.symptoms && LEVELS.windows.symptoms.black_login){
    LEVELS.boot.symptoms.black_login = LEVELS.windows.symptoms.black_login;
    delete LEVELS.windows.symptoms.black_login;
  }
  Object.keys(MODEL_STRUCTURE).forEach(function(product){
    var windowsRow=findRow(product,'windows');
    var bootRow=findRow(product,'boot');
    if(windowsRow) windowsRow.symptoms=removeAll(windowsRow.symptoms,'black_login');
    if(bootRow) bootRow.symptoms=placeLast(bootRow.symptoms,'black_login');
  });

  // 3) Power cord checklist wording is standardized as Swap Power Cord.

  // 4) Battery and Port share the exact same Can't Charge symptom object.
  if(LEVELS.charging && LEVELS.charging.symptoms && LEVELS.charging.symptoms.typec){
    var cantCharge=LEVELS.charging.symptoms.typec;
    cantCharge.name="Can't Charge";
    LEVELS.port.symptoms.not_charge=cantCharge;
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var batteryRow=findRow(product,'charging');
      var portRow=findRow(product,'port');
      if(batteryRow) batteryRow.symptoms=placeFirst(batteryRow.symptoms,'typec');
      if(portRow) portRow.symptoms=placeFirst(portRow.symptoms,'not_charge');
    });
  }

  // 5) Audio and Port share the exact same Audio Jack symptom object; place it last.
  if(LEVELS.audio && LEVELS.audio.symptoms && LEVELS.audio.symptoms.jack){
    var audioJack=LEVELS.audio.symptoms.jack;
    LEVELS.port.symptoms.audio_jack=audioJack;
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var audioRow=findRow(product,'audio');
      var portRow=findRow(product,'port');
      if(audioRow) audioRow.symptoms=placeLast(audioRow.symptoms,'jack');
      if(portRow) portRow.symptoms=placeLast(portRow.symptoms,'audio_jack');
    });
  }
})();

// v5.0.7 shared symptom data consistency patch
(function applyV507Patch(){
  function findRow(product, level){
    return (MODEL_STRUCTURE[product] || []).find(function(row){ return row.level === level; });
  }
  function removeAll(arr, key){ return (arr || []).filter(function(x){ return x !== key; }); }
  function placeFirst(arr, key){ arr = removeAll(arr, key); arr.unshift(key); return arr; }
  function placeLast(arr, key){ arr = removeAll(arr, key); arr.push(key); return arr; }
  function q(label, options, text){
    var item = { label: label, options: options, text: !!text, diag: false };
    return item;
  }

  // Can't Charge: Battery and Port are two menu entries backed by one shared object.
  if(LEVELS.charging && LEVELS.charging.symptoms && LEVELS.charging.symptoms.typec &&
     LEVELS.port && LEVELS.port.symptoms){
    var cantCharge = LEVELS.charging.symptoms.typec;
    cantCharge.name = "Can't Charge";
    cantCharge.common = [
      q('Charge LED', 'led'),
      q('Swap Type-C Port Charge', 'typec_port'),
      q('Swap Adapter', 'swap'),
      q('Adapter Test on Other Machine', 'swap'),
      q('Lenovo Vantage Update', 'select'),
      q('Power Reset', 'select'),
      q('Physical Damage / Liquid Spilled', 'yesno'),
      q('Other Issue', 'yesno', true)
    ];
    LEVELS.port.symptoms.not_charge = cantCharge;

    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var batteryRow = findRow(product, 'charging');
      var portRow = findRow(product, 'port');
      if(batteryRow) batteryRow.symptoms = placeFirst(batteryRow.symptoms, 'typec');
      if(portRow) portRow.symptoms = placeFirst(portRow.symptoms, 'not_charge');
    });
  }

  // Audio Jack: Audio and Port are two menu entries backed by one shared object.
  if(LEVELS.audio && LEVELS.audio.symptoms && LEVELS.audio.symptoms.jack &&
     LEVELS.port && LEVELS.port.symptoms){
    var audioJack = LEVELS.audio.symptoms.jack;
    audioJack.name = 'Audio Jack';
    audioJack.common = [
      q('Swap Headphone', 'swap'),
      q('Uninstall Audio Driver and Restart', 'select'),
      q('Audio Driver Update', 'select'),
      q('Lenovo Vantage Update', 'select'),
      q('Physical Damage / Liquid Spilled', 'yesno'),
      q('Other Issue', 'yesno', true)
    ];
    LEVELS.port.symptoms.audio_jack = audioJack;

    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var audioRow = findRow(product, 'audio');
      var portRow = findRow(product, 'port');
      if(audioRow) audioRow.symptoms = placeLast(audioRow.symptoms, 'jack');
      if(portRow) portRow.symptoms = placeLast(portRow.symptoms, 'audio_jack');
    });
  }
})();

// v5.0.7 Global Naming Standard Rule — SYMPTOM / GUIDE audit
// UI-facing Level, Symptom, and Troubleshooting Guide names use the official
// Title Case format. Generate Note text is intentionally not modified here.
(function applyGlobalSymptomGuideNamingStandard(){
  var exactNames = {
    'Wi-fi': 'Wi-Fi',
    'Wi-Fi': 'Wi-Fi',
    'Usb-A': 'USB-A',
    'Usb-C Data': 'USB-C Data',
    'Usb-C Display': 'USB-C Display',
    'Usb-C Thunderbolt': 'USB-C Thunderbolt',
    'Usb-C Data / Thunderbolt': 'USB-C Data / Thunderbolt',
    'Hdmi': 'HDMI',
    'Hdmi In': 'HDMI In',
    'Hdmi Out': 'HDMI Out',
    'Vga': 'VGA',
    'Lan': 'LAN',
    'Wwan': 'WWAN',
    'Sim': 'SIM',
    'Ssd Not Detect': 'SSD Not Detect',
    'Hdd Not Detect': 'HDD Not Detect',
    'Ssd Not Found During Install Os': 'SSD Not Found During Install OS',
    'Bios': 'BIOS',
    'Bios Password': 'BIOS Password',
    'Bios Version': 'BIOS Version',
    'Bios / Supervisor Password': 'BIOS / Supervisor Password',
    'Bsod': 'BSOD',
    'Pxe': 'PXE',
    'LCD Self-Test': 'LCD Self-Test',
    'Sfc /Scannow': 'SFC /scannow',
    'Bitlocker Recovery': 'BitLocker Recovery',
    'Bypass Windows 11 Oobe': 'Bypass Windows 11 OOBE',
    'Fn Key': 'FN Key',
    'Fn & Ctrl Key Swap': 'Fn & Ctrl Key Swap',
    'Keyboard Left Ctrl': 'Keyboard Left Ctrl',
    'Tiny-In-One (Tio) Dock': 'Tiny-in-One (TIO) Dock',
    'Re-Install Windows': 'Re-install Windows',
    'Can\'t Charge': 'Can\'t Charge',
    'Displayport': 'DisplayPort',
    'Trackpoint': 'TrackPoint',
    'Lock On Leave Function': 'Lock on Leave Function'
  };

  var wordAcronyms = {
    'usb':'USB','hdmi':'HDMI','vga':'VGA','lan':'LAN','wwan':'WWAN','sim':'SIM',
    'ssd':'SSD','hdd':'HDD','bios':'BIOS','bsod':'BSOD','pxe':'PXE','lcd':'LCD',
    'oobe':'OOBE','rfid':'RFID','uuid':'UUID','tio':'TIO','os':'OS','crc':'CRC','efi':'EFI'
  };

  function titleToken(token){
    if(!token) return token;
    var lower = token.toLowerCase();
    if(wordAcronyms[lower]) return wordAcronyms[lower];
    if(/^\d+$/.test(token)) return token;
    if(/^usb-[ac]$/i.test(token)) return 'USB-' + token.slice(-1).toUpperCase();
    if(/^wi-fi$/i.test(token)) return 'Wi-Fi';
    if(/^bitlocker$/i.test(token)) return 'BitLocker';
    if(/^displayport$/i.test(token)) return 'DisplayPort';
    if(/^trackpoint$/i.test(token)) return 'TrackPoint';
    if(/^scannow$/i.test(token)) return 'scannow';
    if(/^can't$/i.test(token)) return "Can't";
    return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
  }

  function titlePart(part){
    return part.split(/(\s+|\/|\+|&|\(|\)|:)/).map(function(piece){
      if(/^\s+$/.test(piece) || /^(\/|\+|&|\(|\)|:)$/.test(piece)) return piece;
      return piece.split('-').map(titleToken).join('-');
    }).join('');
  }

  function normalizeName(name){
    if(typeof name !== 'string') return name;
    var cleaned = name.trim().replace(/^Error\s+/i, '').replace(/\s+:\s+/g, ' ');
    var titled = titlePart(cleaned);
    return exactNames[titled] || titled;
  }

  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level = LEVELS[levelKey];
    if(!level) return;
    if(level.name) level.name = normalizeName(level.name);
    Object.keys(level.symptoms || {}).forEach(function(symptomKey){
      var symptom = level.symptoms[symptomKey];
      if(symptom && symptom.name) symptom.name = normalizeName(symptom.name);
    });
  });
})();

// v5.0.9 authoritative shared-data, duplicate, and naming patch
(function applyV508Patch(){
  function findRow(product, level){
    return (MODEL_STRUCTURE[product] || []).find(function(row){ return row.level === level; });
  }
  function removeAll(arr, key){ return (arr || []).filter(function(x){ return x !== key; }); }
  function placeFirst(arr, key){ arr = removeAll(arr, key); arr.unshift(key); return arr; }
  function placeLast(arr, key){ arr = removeAll(arr, key); arr.push(key); return arr; }
  function q(label, options, text){ return {label:label, options:options, text:!!text, diag:false}; }

  // Shared Can't Charge: one data object referenced by Battery and Port.
  if(LEVELS.charging && LEVELS.charging.symptoms && LEVELS.charging.symptoms.typec &&
     LEVELS.port && LEVELS.port.symptoms){
    var sharedCantCharge = LEVELS.charging.symptoms.typec;
    sharedCantCharge.name = "Can't Charge";
    sharedCantCharge.common = [
      q('Charge LED','led'),
      q('Swap Type-C Port Charge','typec_port'),
      q('Swap Adapter','swap'),
      q('Adapter Test on Other Machine','swap'),
      q('Lenovo Vantage Update','select'),
      q('Power Reset','select'),
      q('Physical Damage / Liquid Spilled','yesno'),
      q('Other Issue','yesno',true)
    ];
    LEVELS.port.symptoms.not_charge = sharedCantCharge;
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var batteryRow=findRow(product,'charging');
      var portRow=findRow(product,'port');
      if(batteryRow) batteryRow.symptoms=placeFirst(batteryRow.symptoms,'typec');
      if(portRow) portRow.symptoms=placeFirst(portRow.symptoms,'not_charge');
    });
  }

  // Shared Audio Jack: one data object referenced by Audio and Port.
  if(LEVELS.audio && LEVELS.audio.symptoms && LEVELS.audio.symptoms.jack &&
     LEVELS.port && LEVELS.port.symptoms){
    var sharedAudioJack = LEVELS.audio.symptoms.jack;
    sharedAudioJack.name = 'Audio Jack';
    sharedAudioJack.common = [
      q('Swap Headphone','swap'),
      q('Uninstall Audio Driver and Restart','select'),
      q('Audio Driver Update','select'),
      q('Lenovo Vantage Update','select'),
      q('Physical Damage / Liquid Spilled','yesno'),
      q('Other Issue','yesno',true)
    ];
    LEVELS.port.symptoms.audio_jack = sharedAudioJack;
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var audioRow=findRow(product,'audio');
      var portRow=findRow(product,'port');
      if(audioRow) audioRow.symptoms=placeLast(audioRow.symptoms,'jack');
      if(portRow) portRow.symptoms=placeLast(portRow.symptoms,'audio_jack');
    });
  }

  // SSD Windows Setup: remove the duplicate RST / RSTe update item.
  if(LEVELS.storage && LEVELS.storage.symptoms && LEVELS.storage.symptoms.ssd_not_detect_windows_setup){
    var storageInstall=LEVELS.storage.symptoms.ssd_not_detect_windows_setup;
    storageInstall.name='SSD Not Found During Install OS';
    storageInstall.common=(storageInstall.common || []).filter(function(item){
      return item && item.label !== 'RST / RSTe Driver Update';
    });
  }

  // Industry-standard acronym spelling in SYMPTOM / GUIDE names.
  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey];
    if(!level) return;
    if(level.name === 'Sd Card') level.name='SD Card';
    Object.keys(level.symptoms || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey];
      if(!symptom || !symptom.name) return;
      symptom.name = symptom.name
        .replace(/\bSd Card\b/g,'SD Card')
        .replace(/\bSsd\b/g,'SSD')
        .replace(/\bHdd\b/g,'HDD')
        .replace(/\bUsb\b/g,'USB')
        .replace(/\bHdmi\b/g,'HDMI')
        .replace(/\bBios\b/g,'BIOS');
    });
  });
})();



// v5.0.9 authoritative content, Safe Mode removal, and Title Case patch
(function applyV509Patch(){
  function findRow(product, level){
    return (MODEL_STRUCTURE[product] || []).find(function(row){ return row.level === level; });
  }
  function removeAll(arr, key){ return (arr || []).filter(function(x){ return x !== key; }); }
  function placeLast(arr, key){ arr=removeAll(arr,key); arr.push(key); return arr; }
  function q(label, options, text, diag){
    return {label:label, options:options, text:!!text, diag:!!diag};
  }
  var minorWords={and:1,or:1,of:1,to:1,in:1,on:1,for:1,at:1,by:1,from:1,with:1};
  var acronyms={usb:'USB',bios:'BIOS',uefi:'UEFI',hdmi:'HDMI',ssd:'SSD',hdd:'HDD',os:'OS',efi:'EFI',crc:'CRC',tpm:'TPM',fru:'FRU',pin:'PIN',lan:'LAN',wwan:'WWAN',sim:'SIM',lcd:'LCD',bsod:'BSOD',pxe:'PXE'};
  function titleCase(value){
    if(typeof value!=='string') return value;
    var index=0;
    return value.split(/(\s+|\/|&|\+|\(|\)|:)/).map(function(part){
      if(/^\s+$/.test(part)||/^(\/|&|\+|\(|\)|:)$/.test(part)) return part;
      return part.split('-').map(function(token){
        var lower=token.toLowerCase(), current=index++;
        if(acronyms[lower]) return acronyms[lower];
        if(lower==='wi') return 'Wi';
        if(lower==='fi') return 'Fi';
        if(lower==='trackpoint') return 'TrackPoint';
        if(lower==='displayport') return 'DisplayPort';
        if(lower==='bitlocker') return 'BitLocker';
        if(/^re-install$/i.test(token)) return 'Re-install';
        if(lower==="can't") return "Can't";
        if(minorWords[lower] && current>0) return lower;
        return token ? token.charAt(0).toUpperCase()+token.slice(1).toLowerCase() : token;
      }).join('-');
    }).join('').replace(/\bRe-Install\b/g,'Re-install');
  }

  // Required terminology and global Safe Mode checklist removal.
  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey];
    if(!level) return;
    if(level.name) level.name=titleCase(level.name);
    Object.keys(level.symptoms || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey];
      if(!symptom) return;
      if(symptom.name) symptom.name=titleCase(symptom.name);
      if(Array.isArray(symptom.common)){
        symptom.common=symptom.common.filter(function(item){
          if(!item || !item.label) return true;
          return !/Safe Mode Test|Can (?:Boot Into|Access) Safe Mode/i.test(item.label);
        }).map(function(item){
          if(/^Can (?:Boot Into|boot into) Windows$/i.test(item.label)) item.label='Can Access Windows';
          if(/^Can (?:Boot Into|boot into) BIOS$/i.test(item.label)) item.label='Can Access BIOS';
          item.label=titleCase(item.label);
          return item;
        });
      }
    });
  });

  // Remove Safe Mode troubleshooting guide and every Related Guide reference.
  if(typeof TROUBLESHOOTING_GUIDES!=='undefined'){
    Object.keys(TROUBLESHOOTING_GUIDES).forEach(function(group){
      if(TROUBLESHOOTING_GUIDES[group]) delete TROUBLESHOOTING_GUIDES[group].safe_mode;
    });
  }
  if(typeof GUIDE_ORDER!=='undefined' && Array.isArray(GUIDE_ORDER)){
    for(var i=GUIDE_ORDER.length-1;i>=0;i--) if(GUIDE_ORDER[i]==='safe_mode') GUIDE_ORDER.splice(i,1);
  }
  if(typeof RELATED_GUIDES!=='undefined'){
    Object.keys(RELATED_GUIDES).forEach(function(levelKey){
      Object.keys(RELATED_GUIDES[levelKey] || {}).forEach(function(symptomKey){
        RELATED_GUIDES[levelKey][symptomKey]=(RELATED_GUIDES[levelKey][symptomKey] || []).filter(function(x){ return x!=='safe_mode'; });
      });
    });
  }

  // Boot > Stuck Lenovo Logo.
  if(LEVELS.boot && LEVELS.boot.symptoms && LEVELS.boot.symptoms.stuck_logo){
    var stuck=LEVELS.boot.symptoms.stuck_logo;
    stuck.common=(stuck.common || []).filter(function(item){ return item && item.label!=='Lenovo Vantage Update'; });
    stuck.common.forEach(function(item){ if(item.label==='Lenovo Diagnostics Storage') item.label='Lenovo Diagnostics'; });
  }

  // Boot > Black Screen After Login: Can Access BIOS is the first checklist item.
  if(LEVELS.boot && LEVELS.boot.symptoms && LEVELS.boot.symptoms.black_login){
    var black=LEVELS.boot.symptoms.black_login;
    black.common=(black.common || []).filter(function(item){
      return item && !/Safe Mode Test|Can (?:Boot Into|Access) Safe Mode/i.test(item.label || '');
    });
    black.common=black.common.filter(function(item){ return item.label!=='Can Access BIOS'; });
    black.common.unshift(q('Can Access BIOS','yesno'));
  }

  // Windows > Can't Resume After Sleep.
  if(LEVELS.windows && LEVELS.windows.symptoms){
    LEVELS.windows.symptoms.cant_resume_after_sleep={
      name:"Can't Resume After Sleep",
      defaultResult:'Dispatch',
      defaultPart:'Software Troubleshooting / Mainboard',
      common:[
        q('Lenovo Vantage Update','select'),
        q('BIOS Update','select'),
        q('Load Default BIOS','select'),
        q('Run Lenovo Diagnostics','diag',false,true),
        q('Re-install Windows','select'),
        q('Physical Damage / Liquid Spilled','yesno'),
        q('Other Issue','yesno',true)
      ]
    };
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var row=findRow(product,'windows');
      if(row) row.symptoms=placeLast(row.symptoms,'cant_resume_after_sleep');
    });
  }

  // Mouse > Cursor Auto Move or Jump.
  if(LEVELS.mouse && LEVELS.mouse.symptoms){
    LEVELS.mouse.symptoms.cursor_auto_move_or_jump={
      name:'Cursor Auto Move or Jump',
      defaultResult:'Dispatch',
      defaultPart:'Mouse / Touchpad / TrackPoint / Touch Screen / Mainboard',
      common:[
        q('Remove External Mouse','select'),
        q('Disable Touchpad','select'),
        q('Disable TrackPoint','select'),
        q('Disable Touch Screen','select'),
        q('Lenovo Vantage Update','select'),
        q('System Restore','select'),
        q('Physical Damage / Liquid Spilled','yesno'),
        q('Other Issue','yesno',true)
      ]
    };
    Object.keys(MODEL_STRUCTURE).forEach(function(product){
      var row=findRow(product,'mouse');
      if(row) row.symptoms=placeLast(row.symptoms,'cursor_auto_move_or_jump');
    });
  }

  // Final UI-facing Title Case pass for symptoms, errors, guides, and checklist labels.
  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey];
    if(!level) return;
    if(level.name) level.name=titleCase(level.name);
    Object.keys(level.symptoms || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey];
      if(!symptom) return;
      if(symptom.name) symptom.name=titleCase(symptom.name);
      (symptom.common || []).forEach(function(item){ if(item && item.label) item.label=titleCase(item.label); });
    });
  });
  if(typeof TROUBLESHOOTING_GUIDES!=='undefined'){
    Object.keys(TROUBLESHOOTING_GUIDES).forEach(function(group){
      Object.keys(TROUBLESHOOTING_GUIDES[group] || {}).forEach(function(key){
        var guide=TROUBLESHOOTING_GUIDES[group][key];
        if(guide && guide.name) guide.name=titleCase(guide.name);
        if(guide && guide.title) guide.title=titleCase(guide.title);
      });
    });
  }
})();

// v5.0.9 hotfix: Wi-Fi duplicate cleanup and BIOS sequence enforcement
(function applyV509Hotfix(){
  function q(label, options, text, diag){
    return {label:label, options:options, text:!!text, diag:!!diag};
  }

  // Network > Wi-Fi: keep Windows Update and WLAN Driver Update exactly once.
  if(LEVELS.network && LEVELS.network.symptoms && LEVELS.network.symptoms.wifi){
    LEVELS.network.symptoms.wifi.common=[
      q('Can Detect Wi-Fi Signal','yesno'),
      q('Swap Wi-Fi / Hotspot','swap'),
      q('Airplane Mode','airplane'),
      q('Check Wireless Driver in Device Manager','yesno'),
      q('Uninstall Wireless Driver and Restart','select'),
      q('WLAN Driver Update','select'),
      q('Windows Update','select'),
      q('Lenovo Vantage Update','select'),
      q('Physical Damage / Liquid Spilled','yesno'),
      q('Other Issue','yesno',true)
    ];
  }

  // Windows > Can't Resume After Sleep: BIOS Update must be immediately followed by Load Default BIOS.
  if(LEVELS.windows && LEVELS.windows.symptoms && LEVELS.windows.symptoms.cant_resume_after_sleep){
    LEVELS.windows.symptoms.cant_resume_after_sleep.common=[
      q('Lenovo Vantage Update','select'),
      q('BIOS Update','select'),
      q('Load Default BIOS','select'),
      q('Run Lenovo Diagnostics','diag',false,true),
      q('Re-install Windows','select'),
      q('Physical Damage / Liquid Spilled','yesno'),
      q('Other Issue','yesno',true)
    ];
  }
})();


// v5.0.9 hotfix 2: checklist cleanup, Related Guide, Display symptoms, and Diagnostics naming
(function applyV509Hotfix2(){
  // 1. Boot > Stuck Lenovo Logo: remove Lenovo Vantage Update.
  if(LEVELS.boot && LEVELS.boot.symptoms && LEVELS.boot.symptoms.stuck_logo){
    LEVELS.boot.symptoms.stuck_logo.common=(LEVELS.boot.symptoms.stuck_logo.common || []).filter(function(item){
      return item && item.label !== 'Lenovo Vantage Update';
    });
  }

  // 2. Any symptom containing System Restore must show the System Restore Related Guide.
  if(typeof RELATED_GUIDES !== 'undefined'){
    Object.keys(LEVELS || {}).forEach(function(levelKey){
      var level=LEVELS[levelKey];
      if(!level || !level.symptoms) return;
      Object.keys(level.symptoms).forEach(function(symptomKey){
        var symptom=level.symptoms[symptomKey];
        var hasSystemRestore=(symptom.common || []).some(function(item){
          return item && item.label === 'System Restore';
        });
        if(!hasSystemRestore) return;
        if(!RELATED_GUIDES[levelKey]) RELATED_GUIDES[levelKey]={};
        var guides=RELATED_GUIDES[levelKey][symptomKey] || [];
        if(guides.indexOf('system_restore') < 0) guides.push('system_restore');
        RELATED_GUIDES[levelKey][symptomKey]=guides;
      });
    });
  }

  // 3. Display: remove Dead Pixel and Bright Pixel.
  if(LEVELS.display && LEVELS.display.symptoms){
    delete LEVELS.display.symptoms.dead;
    delete LEVELS.display.symptoms.bright;
  }
  if(typeof RELATED_GUIDES !== 'undefined' && RELATED_GUIDES.display){
    delete RELATED_GUIDES.display.dead;
    delete RELATED_GUIDES.display.bright;
  }
  Object.keys(MODEL_STRUCTURE || {}).forEach(function(product){
    (MODEL_STRUCTURE[product] || []).forEach(function(row){
      if(row && row.level === 'display' && Array.isArray(row.symptoms)){
        row.symptoms=row.symptoms.filter(function(key){ return key !== 'dead' && key !== 'bright'; });
      }
    });
  });

  // 4. ThinkPad > Storage > SSD Not Found During Install OS: remove Storage Firmware Update.
  if(LEVELS.storage && LEVELS.storage.symptoms){
    Object.keys(LEVELS.storage.symptoms).forEach(function(key){
      var symptom=LEVELS.storage.symptoms[key];
      if(symptom && symptom.name === 'SSD Not Found During Install OS'){
        symptom.common=(symptom.common || []).filter(function(item){
          return item && item.label !== 'Storage Firmware Update';
        });
      }
    });
  }

  // 5. Normalize every part-specific Lenovo Diagnostics checklist label.
  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey];
    Object.keys((level && level.symptoms) || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey];
      (symptom.common || []).forEach(function(item){
        if(item && /^Lenovo Diagnostics(?:\s+.+)?$/i.test(item.label || '')){
          item.label='Run Lenovo Diagnostics';
          item.options='diag';
          item.diag=true;
        }
      });
    });
  });
})();


// v5.0.9 final enforcement: Stuck Lenovo Logo and System Restore naming
(function applyV509FinalEnforcement(){
  // Prevent dynamic update rules from restoring Lenovo Vantage Update for Stuck Lenovo Logo.
  if(typeof UPDATE_RULES !== 'undefined' && UPDATE_RULES.boot){
    UPDATE_RULES.boot.stuck_logo={};
  }

  if(LEVELS.boot && LEVELS.boot.symptoms && LEVELS.boot.symptoms.stuck_logo){
    LEVELS.boot.symptoms.stuck_logo.common=(LEVELS.boot.symptoms.stuck_logo.common || []).filter(function(item){
      return item && item.label !== 'Lenovo Vantage Update';
    });
  }

  // Use the official checklist label so Related Guide detection works directly.
  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey];
    Object.keys((level && level.symptoms) || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey];
      (symptom.common || []).forEach(function(item){
        if(item && item.label === 'Windows System Restore') item.label='System Restore';
      });
      if(symptom.questions){
        Object.keys(symptom.questions).forEach(function(product){
          (symptom.questions[product] || []).forEach(function(item){
            if(item && item.label === 'Windows System Restore') item.label='System Restore';
          });
        });
      }
    });
  });
})();

// v5.1.0 checklist and naming enforcement
(function applyV510Patch(){
  function removeLabels(list, labels){
    return (list || []).filter(function(item){ return item && labels.indexOf(item.label) < 0; });
  }
  function replaceResetWithEmergency(list){
    var output=[];
    var inserted=false;
    (list || []).forEach(function(item){
      if(item && (item.label==='Power Reset' || item.label==='Power Reset / Emergency Reset')){
        if(!inserted){ output.push({label:'Emergency Reset',options:'select',text:false,diag:false}); inserted=true; }
      }else if(item && item.label==='Emergency Reset'){
        if(!inserted){ output.push(item); inserted=true; }
      }else output.push(item);
    });
    if(!inserted) output.push({label:'Emergency Reset',options:'select',text:false,diag:false});
    return output;
  }
  function addAfterUsbKeyboard(list){
    var output=(list || []).filter(function(item){ return item && item.label!=='On-Screen Keyboard Test'; });
    var index=output.findIndex(function(item){ return item && /^(USB Keyboard test|USB Keyboard Test)$/.test(item.label); });
    if(index>=0) output.splice(index+1,0,{label:'On-Screen Keyboard Test',options:'swap',text:false,diag:false});
    return output;
  }
  function normalizeLabels(list){
    (list || []).forEach(function(item){
      if(!item || !item.label) return;
      item.label=item.label.replace(/\bPower LED\b/g,'Power LED').replace(/\bCharge LED\b/g,'Charge LED').replace(/\bLcd\b/g,'LCD');
    });
    return list || [];
  }

  if(LEVELS.camera && LEVELS.camera.symptoms){
    Object.keys(LEVELS.camera.symptoms).forEach(function(key){
      var symptom=LEVELS.camera.symptoms[key];
      if(symptom.common) symptom.common=removeLabels(symptom.common,['Issue Happens on All Apps','Issue happens on all apps']);
    });
  }

  if(LEVELS.keyboard && LEVELS.keyboard.symptoms && LEVELS.keyboard.symptoms.few){
    var few=LEVELS.keyboard.symptoms.few;
    few.name='Few Key Not Work';
    if(few.questions){
      Object.keys(few.questions).forEach(function(product){ few.questions[product]=addAfterUsbKeyboard(few.questions[product]); });
    }
    if(few.common) few.common=addAfterUsbKeyboard(few.common);
  }

  if(LEVELS.touchpad && LEVELS.touchpad.symptoms){
    Object.keys(LEVELS.touchpad.symptoms).forEach(function(key){
      var symptom=LEVELS.touchpad.symptoms[key];
      if(symptom.common) symptom.common=removeLabels(symptom.common,['Touchpad Driver Update']);
    });
  }

  if(LEVELS.fan && LEVELS.fan.symptoms){
    Object.keys(LEVELS.fan.symptoms).forEach(function(key){
      var symptom=LEVELS.fan.symptoms[key];
      if(symptom.common) symptom.common=removeLabels(symptom.common,[
        'Check Temperature / Overheat','Check Temperature','Check temperature / Overheat',
        'Check for Dust and Foreign Objects','Load BIOS Default','Load Default BIOS','Load BIOS default'
      ]);
    });
  }

  Object.keys(LEVELS || {}).forEach(function(levelKey){
    var level=LEVELS[levelKey]; if(!level) return;
    if(level.name) level.name=level.name.replace(/\bLcd\b/g,'LCD');
    Object.keys(level.symptoms || {}).forEach(function(symptomKey){
      var symptom=level.symptoms[symptomKey]; if(!symptom) return;
      if(symptom.name) symptom.name=symptom.name.replace(/\bLcd\b/g,'LCD');
      if(symptom.defaultPart) symptom.defaultPart=symptom.defaultPart.replace(/\bLcd\b/g,'LCD');
      if(symptom.common) normalizeLabels(symptom.common);
      Object.keys(symptom.questions || {}).forEach(function(product){ normalizeLabels(symptom.questions[product]); });
    });
  });

  if(LEVELS.boot && LEVELS.boot.symptoms){
    ['no_power','pond'].forEach(function(key){
      var symptom=LEVELS.boot.symptoms[key];
      if(symptom && symptom.questions && symptom.questions.thinkpad){
        symptom.questions.thinkpad=replaceResetWithEmergency(symptom.questions.thinkpad);
      }
    });
    if(LEVELS.boot.symptoms.pond_beep && LEVELS.boot.symptoms.pond_beep.common){
      LEVELS.boot.symptoms.pond_beep.common=replaceResetWithEmergency(LEVELS.boot.symptoms.pond_beep.common);
    }
    if(LEVELS.boot.symptoms.auto_repair){
      LEVELS.boot.symptoms.auto_repair.common=removeLabels(LEVELS.boot.symptoms.auto_repair.common,['Lenovo Vantage Update']);
    }
    if(LEVELS.boot.symptoms.black_login){
      LEVELS.boot.symptoms.black_login.common=removeLabels(LEVELS.boot.symptoms.black_login.common,['Graphics Driver Update']);
    }
  }
})();



// v5.1.0 final source enforcement (revision 2)
(function applyV510FinalSourceEnforcement(){
  function clean(list, removed){
    return (list || []).filter(function(item){ return item && removed.indexOf(item.label) < 0; }).map(function(item){
      if(item.label){
        item.label=String(item.label).replace(/\bPower LED\b/g,'Power LED').replace(/\bCharge LED\b/g,'Charge LED').replace(/\bLcd\b/g,'LCD');
      }
      return item;
    });
  }
  function emergencyOnly(list){
    var out=clean(list,['Power Reset','Power Reset / Emergency Reset','Emergency Reset']);
    var pos=Math.min(3,out.length);
    out.splice(pos,0,{label:'Emergency Reset',options:'select',text:false,diag:false});
    return out;
  }
  var fanRemoved=['Check Temperature / Overheat','Check Temperature','Check temperature / Overheat','Check for Dust and Foreign Objects','Load BIOS Default','Load Default BIOS','Load BIOS default'];
  if(LEVELS.fan && LEVELS.fan.symptoms){
    Object.keys(LEVELS.fan.symptoms).forEach(function(k){
      var x=LEVELS.fan.symptoms[k];
      x.common=clean(x.common,fanRemoved);
      Object.keys(x.questions || {}).forEach(function(p){ x.questions[p]=clean(x.questions[p],fanRemoved); });
    });
  }
  if(LEVELS.boot && LEVELS.boot.symptoms){
    ['no_power','pond','pond_beep'].forEach(function(k){
      var x=LEVELS.boot.symptoms[k]; if(!x) return;
      if(x.questions && x.questions.thinkpad) x.questions.thinkpad=emergencyOnly(x.questions.thinkpad);
      else if(k==='pond_beep') x.common=emergencyOnly(x.common);
    });
    var a=LEVELS.boot.symptoms.auto_repair; if(a){ a.common=clean(a.common,['Lenovo Vantage Update']); Object.keys(a.questions||{}).forEach(function(p){a.questions[p]=clean(a.questions[p],['Lenovo Vantage Update']);}); }
    var b=LEVELS.boot.symptoms.black_login; if(b){ b.common=clean(b.common,['Graphics Driver Update']); Object.keys(b.questions||{}).forEach(function(p){b.questions[p]=clean(b.questions[p],['Graphics Driver Update']);}); }
  }
  Object.keys(LEVELS || {}).forEach(function(lk){ var l=LEVELS[lk]; if(l.name) l.name=l.name.replace(/\bLcd\b/g,'LCD'); Object.keys(l.symptoms||{}).forEach(function(sk){var x=l.symptoms[sk]; if(x.name)x.name=x.name.replace(/\bLcd\b/g,'LCD'); x.common=clean(x.common,[]); Object.keys(x.questions||{}).forEach(function(p){x.questions[p]=clean(x.questions[p],[]);});});});
})();
