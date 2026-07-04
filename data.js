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
              "label": "Fan spinning",
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
              "label": "Fan spinning",
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
              "label": "Fan spinning",
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
              "label": "Fan spinning",
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
              "label": "Fan spinning",
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
              "label": "Fan spinning",
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
            "label": "Fan spinning",
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
            "label": "Swap AC Power Cord",
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
            "label": "Swap AC Power Cord",
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
            "label": "Voice Recorder",
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
            "label": "Audio Driver Update",
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
            "label": "Audio Driver Update",
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
            "label": "Voice Recorder",
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
            "label": "Touchpad Driver Update",
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
            "label": "Touchpad Driver Update",
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
            "label": "Touchpad Driver Update",
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
        "guide": "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนดำเนินการตามขั้นตอนด้านล่างนี้\n\nทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nRun Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.\n\nOnce completed, please provide the result back to us."
      },
      "battery_report": {
        "name": "Battery Report",
        "guide": "วิธีดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC > Drive C > Windows > System32 และหาชื่อไฟล์ battery-report.html\n\nสิ่งที่ต้องส่งกลับ\n• battery-report.html",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่างเพื่อดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC > Drive C > Windows > System32 และหาชื่อไฟล์ battery-report.html\n\nเมื่อดำเนินการเรียบร้อยแล้ว รบกวนส่งไฟล์ battery-report.html กลับมา เพื่อให้ทางเราตรวจสอบเพิ่มเติมครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below to generate the Battery Report.\n\n1. Open Command Prompt or CMD.\n2. Type the command: powercfg /batteryreport\n3. Open This PC > Drive C > Windows > System32 and locate battery-report.html.\n\nOnce completed, please send the file back to us for further checking."
      },
      "battery_health": {
        "name": "Battery Health",
        "guide": "วิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีดู Battery Health\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device > Power\n3. ตรวจสอบหัวข้อ Battery Health\n4. แจ้งผล Good / Fair / Poor / Replace Recommended / Battery Not Detected / Not Test กลับมา\n\nสิ่งที่ต้องส่งกลับ\n• Battery Health Status\n\nOnce completed, please provide the result back to us."
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
        "guide": "วิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System > Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nOnce completed, please provide the result back to us."
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
        "name": "Uninstall Updates",
        "guide": "Uninstall Updates\n\nวัตถุประสงค์\nถอนการติดตั้ง Windows Update ล่าสุด หากปัญหาเกิดขึ้นหลังจากอัปเดตระบบ\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\nขั้นตอน\n1. เลือก Troubleshoot\n2. เลือก Advanced options\n3. เลือก Uninstall Updates\n4. เลือก Uninstall latest quality update หรือ Uninstall latest feature update\n5. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n6. ตรวจสอบว่าสามารถใช้งาน Windows ได้ตามปกติหรือไม่",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Uninstall Updates ตามขั้นตอนด้านล่าง\n\nหากไม่สามารถเข้า Windows ได้\nเปิดเครื่อง → เมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง จากนั้นเปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง เครื่องจะเข้าสู่ Preparing Automatic Repair แล้วเลือก Advanced options\n\n1. เลือก Troubleshoot\n\n2. เลือก Advanced options\n\n3. เลือก Uninstall Updates\n\n4. เลือก Uninstall latest quality update หรือ Uninstall latest feature update\n\n5. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n\n6. ตรวจสอบว่าสามารถใช้งาน Windows ได้ตามปกติหรือไม่\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease uninstall the latest Windows update by following the steps below.\n\nIf Windows cannot boot, power on the machine. When the Lenovo or Windows logo appears, press and hold the Power button to turn it off. Turn it on again and repeat this about 3 times until Preparing Automatic Repair appears, then select Advanced options.\n\n1. Select Troubleshoot.\n\n2. Select Advanced options.\n\n3. Select Uninstall Updates.\n\n4. Select Uninstall latest quality update or Uninstall latest feature update.\n\n5. Follow the on-screen instructions until completion.\n\n6. Check whether Windows can be used normally.\n\nOnce completed, please provide the result back to us."
      },
      "reinstall_windows": {
        "name": "Re-install Windows",
        "guide": "วิธีติดตั้ง Windows\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security > Secure Boot > Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
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
        "guide": "วิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
      },
      "safe_mode": {
        "name": "Safe Mode",
        "guide": "วิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings > Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
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
        "guide": "วิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account > Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code\n\nOnce completed, please provide the result back to us."
      },
      "windows11_bypass": {
        "name": "Bypass Windows 11 OOBE",
        "guide": "วิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
      },
      "always_on_usb": {
        "name": "Always On USB",
        "guide": "วิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the steps below.\n\nวิธีตั้งค่า Always On USB\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Config > USB\n3. เปิด Always On USB\n4. กด F10 และเลือก Yes เพื่อ Save\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue\n\nOnce completed, please provide the result back to us."
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
        "guide": "Reset Battery เพื่อยืดอายุการใช้งาน\n\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device > Power\n3. ค้นหาหัวข้อ Battery Gauge Reset\n4. เสียบสายชาร์จไว้ระหว่างทำ Reset\n5. กด Reset และรอให้ระบบทำงานจนเสร็จ\n\nระบบจะดำเนินการอัตโนมัติ\n1. ชาร์จแบตเตอรี่จนถึง 100%\n2. ปล่อยแบตเตอรี่ลงจนเกือบ 0%\n3. ชาร์จกลับขึ้นมา 100%\n\nใช้เวลาประมาณ 4–8 ชั่วโมง\nแนะนำให้ทำช่วงกลางวัน หรือช่วงกลางคืนโดยเปิดเครื่องทิ้งไว้",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการ Reset Battery ตามขั้นตอนด้านล่าง\n\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device > Power\n3. ค้นหาหัวข้อ Battery Gauge Reset\n4. เสียบสายชาร์จไว้ระหว่างทำ Reset\n5. กด Reset และรอให้ระบบทำงานจนเสร็จ\n\nกระบวนการจะใช้เวลาประมาณ 4–8 ชั่วโมง โดยระบบจะชาร์จแบตเตอรี่ 100% จากนั้นปล่อยแบตเตอรี่ลงเกือบ 0% และชาร์จกลับขึ้นมา 100%\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform Battery Gauge Reset by following the steps below.\n\n1. Open Lenovo Commercial Vantage or Lenovo Vantage.\n2. Go to Device > Power.\n3. Find Battery Gauge Reset.\n4. Keep the AC adapter connected during the reset.\n5. Click Reset and wait until the process is completed.\n\nThe process may take approximately 4–8 hours.\n\nOnce completed, please provide the result back to us."
      },
      "lcd_self_test": {
        "name": "LCD Self-Test",
        "guide": "LCD Self-Test\n\nMethod 1\n1. ถอดอุปกรณ์ภายนอกทั้งหมด\n2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที\n3. กด Fn + Left Ctrl ค้างไว้\n4. ระหว่างกดค้าง ให้กดปุ่ม Power\n5. เครื่องจะเข้าสู่ LCD Self-Test\n\nMethod 2\n1. เปิดเครื่องและกด F10 ย้ำ ๆ\n2. เข้า Lenovo Diagnostics\n3. เลือก Run Test\n4. เลือกหัวข้อ Display",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยทดสอบ LCD Self-Test ตามขั้นตอนด้านล่าง\n\nMethod 1\n1. ถอดอุปกรณ์ภายนอกทั้งหมด\n2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที\n3. กด Fn + Left Ctrl ค้างไว้\n4. ระหว่างกดค้าง ให้กดปุ่ม Power\n5. เครื่องจะเข้าสู่ LCD Self-Test\n\nMethod 2\n1. เปิดเครื่องและกด F10 ย้ำ ๆ\n2. เข้า Lenovo Diagnostics\n3. เลือก Run Test\n4. เลือกหัวข้อ Display\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease perform LCD Self-Test by following the steps below.\n\nMethod 1\n1. Disconnect all external devices.\n2. Press and hold the Power button for 10–15 seconds to clear residual power.\n3. Press and hold Fn + Left Ctrl.\n4. While holding the keys, press the Power button.\n5. The system will enter LCD Self-Test.\n\nMethod 2\n1. Power on the machine and press F10 repeatedly.\n2. Enter Lenovo Diagnostics.\n3. Select Run Test.\n4. Select Display.\n\nOnce completed, please provide the result back to us."
      },
      "disable_audio_enhancements_external_mic": {
        "name": "Disable Audio Enhancements (External Microphone)",
        "guide": "Disable Audio Enhancements (External Microphone)\n\nMethod 1: Windows Settings\n1. เปิด Settings > System > Sound\n2. เลือก External Microphone\n3. ไปที่ Advanced > Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel > Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก External Microphone\n4. ไปที่ Advanced > Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยปิด Audio Enhancements ของ External Microphone ตามขั้นตอนด้านล่าง\n\nMethod 1: Windows Settings\n1. เปิด Settings > System > Sound\n2. เลือก External Microphone\n3. ไปที่ Advanced > Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel > Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก External Microphone\n4. ไปที่ Advanced > Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนทดสอบไมโครโฟนอีกครั้งและแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease disable Audio Enhancements for the External Microphone by following the steps below.\n\nMethod 1: Windows Settings\n1. Open Settings > System > Sound.\n2. Select External Microphone.\n3. Go to Advanced > Signal.\n4. Uncheck Enable audio enhancements.\n5. Click Apply and OK.\n\nMethod 2: Control Panel\n1. Open Control Panel > Sound.\n2. Go to the Recording tab.\n3. Double-click External Microphone.\n4. Go to Advanced > Signal.\n5. Uncheck Enable audio enhancements.\n6. Click Apply and OK.\n\nOnce completed, please test the microphone again and provide the result back to us."
      },
      "thinkcentre_raid1_ssd_not_found_os_install": {
        "name": "ThinkCentre : RAID 1 SSD Not Found During OS Installation",
        "guide": "ThinkCentre : RAID 1 SSD Not Found During OS Installation\n\nPrepare Intel RST/RSTe Driver\n1. ดาวน์โหลด Intel RST/RSTe Driver ให้ตรงกับรุ่นเครื่อง\n2. แตกไฟล์ลงใน USB Flash Drive\n\nDownload:\n[Paste download link]\n\nConfigure RAID in BIOS\n1. เข้า BIOS > Devices > Storage Setup\n2. เปลี่ยน Configure storage as เป็น RAID\n3. กด F10 เพื่อ Save and Exit\n4. เข้า BIOS อีกครั้ง\n5. ไปที่ Devices > Storage Setup > Intel(R) Rapid Storage Technology\n6. เลือก Create RAID Volume และสร้าง RAID 1\n\nVideo Guide:\nhttps://www.youtube.com/watch?v=ZW_yKI5MVOI\n\nLoad Intel RST/RSTe Driver\n1. Boot เข้า Re-install Windows USB\n2. เมื่อถึงหน้า Windows Setup เลือก Load driver\n3. เปิด USB Flash Drive ที่เก็บ Driver ไว้\n4. เลือกโฟลเดอร์ VMD หรือ RST ขึ้นอยู่กับ Driver ที่ดาวน์โหลด\n5. เลือก Intel RST/RSTe Driver\n6. เมื่อ SSD แสดงขึ้นมาแล้ว ให้ดำเนินการติดตั้ง Windows ต่อ",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยดำเนินการตามขั้นตอนด้านล่าง\n\nThinkCentre : RAID 1 SSD Not Found During OS Installation\n\nPrepare Intel RST/RSTe Driver\n1. ดาวน์โหลด Intel RST/RSTe Driver ให้ตรงกับรุ่นเครื่อง\n2. แตกไฟล์ลงใน USB Flash Drive\n\nDownload:\n[Paste download link]\n\nConfigure RAID in BIOS\n1. เข้า BIOS > Devices > Storage Setup\n2. เปลี่ยน Configure storage as เป็น RAID\n3. กด F10 เพื่อ Save and Exit\n4. เข้า BIOS อีกครั้ง\n5. ไปที่ Devices > Storage Setup > Intel(R) Rapid Storage Technology\n6. เลือก Create RAID Volume และสร้าง RAID 1\n\nVideo Guide:\nhttps://www.youtube.com/watch?v=ZW_yKI5MVOI\n\nLoad Intel RST/RSTe Driver\n1. Boot เข้า Re-install Windows USB\n2. เมื่อถึงหน้า Windows Setup เลือก Load driver\n3. เปิด USB Flash Drive ที่เก็บ Driver ไว้\n4. เลือกโฟลเดอร์ VMD หรือ RST ขึ้นอยู่กับ Driver ที่ดาวน์โหลด\n5. เลือก Intel RST/RSTe Driver\n6. เมื่อ SSD แสดงขึ้นมาแล้ว ให้ดำเนินการติดตั้ง Windows ต่อ\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease follow the guide below.\n\nThinkCentre : RAID 1 SSD Not Found During OS Installation\n\nPrepare Intel RST/RSTe Driver\n1. Download the Intel RST/RSTe Driver that matches the machine model.\n2. Extract the driver to the USB Flash Drive.\n\nDownload:\n[Paste download link]\n\nConfigure RAID in BIOS\n1. Enter BIOS > Devices > Storage Setup.\n2. Change Configure storage as to RAID.\n3. Press F10 to Save and Exit.\n4. Enter BIOS again.\n5. Go to Devices > Storage Setup > Intel(R) Rapid Storage Technology.\n6. Select Create RAID Volume and create RAID 1.\n\nVideo Guide:\nhttps://www.youtube.com/watch?v=ZW_yKI5MVOI\n\nLoad Intel RST/RSTe Driver\n1. Boot to the Re-install Windows USB.\n2. On Windows Setup, select Load driver.\n3. Open the USB Flash Drive that contains the driver.\n4. Select the VMD or RST folder depending on the downloaded driver.\n5. Select Intel RST/RSTe Driver.\n6. Once the SSD is displayed, continue Windows installation.\n\nOnce completed, please provide the result back to us."
      },
      "fn_ctrl_key_swap": {
        "name": "Fn & Ctrl Key Swap",
        "guide": "Fn & Ctrl Key Swap\n\nMethod 1: Lenovo Vantage\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device > Input & Accessories > Keyboard\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. หากเปิดใช้งานอยู่ ให้ปิด Off\n5. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nMethod 2: BIOS\n1. เข้า BIOS\n2. ไปที่ Config > Keyboard/Mouse\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. ตั้งค่าเป็น Disabled\n5. กด F10 เพื่อ Save and Exit\n6. ทดสอบปุ่ม Left Ctrl อีกครั้ง",
        "emailTH": "เรียน คุณลูกค้า\n\nรบกวนช่วยตรวจสอบ Fn & Ctrl Key Swap ตามขั้นตอนด้านล่าง\n\nMethod 1: Lenovo Vantage\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device > Input & Accessories > Keyboard\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. หากเปิดใช้งานอยู่ ให้ปิด Off\n5. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nMethod 2: BIOS\n1. เข้า BIOS\n2. ไปที่ Config > Keyboard/Mouse\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. ตั้งค่าเป็น Disabled\n5. กด F10 เพื่อ Save and Exit\n6. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nหลังจากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับมาครับ",
        "emailEN": "Dear Customer,\n\nPlease check Fn & Ctrl Key Swap by following the steps below.\n\nMethod 1: Lenovo Vantage\n1. Open Lenovo Commercial Vantage or Lenovo Vantage.\n2. Go to Device > Input & Accessories > Keyboard.\n3. Check Fn and Ctrl Key Swap.\n4. If it is enabled, turn it Off.\n5. Test the Left Ctrl key again.\n\nMethod 2: BIOS\n1. Enter BIOS.\n2. Go to Config > Keyboard/Mouse.\n3. Check Fn and Ctrl Key Swap.\n4. Set it to Disabled.\n5. Press F10 to Save and Exit.\n6. Test the Left Ctrl key again.\n\nOnce completed, please provide the result back to us."
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
// Port > Not Charge is an alias of Battery > Not Charge because agents often search by Port/Type-C.
// Checklist, email and dispatch logic are shared from the same source symptom.
if(LEVELS.charging && LEVELS.charging.symptoms && LEVELS.charging.symptoms.typec && LEVELS.port && LEVELS.port.symptoms){
  const portNotCharge = {
    ...LEVELS.charging.symptoms.typec,
    name: "Not Charge",
    aliasOf: "Battery > Not Charge"
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
  'vantage_update','lenovo_diagnostics','battery_report','battery_health','bios_version','product_key','activation','reset_pc','startup_repair','system_restore','uninstall_updates','reinstall_windows','event_viewer','sfc','safe_mode','dump_file','bitlocker_recovery','office_activation','windows11_bypass','always_on_usb','bios_password','lock_on_leave','reset_battery','lcd_self_test','disable_audio_enhancements_external_mic','thinkcentre_raid1_ssd_not_found_os_install','fn_ctrl_key_swap','emergency_reset','power_reset'
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
      makeQ('Fan spinning', 'fan'),
      makeQ('Swap AC Power Cord', 'swap'),
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
// - If No power already asks Swap Adapter, do not also ask Swap AC Power Cord.
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

  // No power duplicate AC cord rule: if a model checklist has Swap Adapter, remove Swap AC Power Cord.
  const noPower = getSym('boot', 'no_power');
  if(noPower && noPower.questions){
    Object.keys(noPower.questions).forEach(product => {
      const qs = noPower.questions[product];
      if(!Array.isArray(qs)) return;
      const hasAdapter = qs.some(q => /^Swap (AC )?Adapter$/.test(q.label) || q.label === 'Swap Adapter');
      if(hasAdapter) noPower.questions[product] = qs.filter(q => q.label !== 'Swap AC Power Cord');
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
    makeQ('Update Graphics Driver', 'select'),
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
  "Can boot into BIOS": {
    "th": "สามารถเข้าหน้า BIOS ได้หรือไม่",
    "en": "Check whether the machine can enter BIOS."
  },
  "Can boot into Safe Mode": {
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
    "en": "Please send the dump file for further checking. Open File Explorer > C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Dump file collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer > C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
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
    "en": "Please send the dump file for further checking. Open File Explorer > C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "External mic test": {
    "th": "ตรวจสอบหัวข้อ External mic test",
    "en": "Check External mic test."
  },
  "External Monitor test": {
    "th": "ตรวจสอบหัวข้อ External Monitor test",
    "en": "For notebook no display: connect an external monitor and check whether the image appears.\nFor display line/defect: connect an external monitor and check whether the same issue appears."
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
    "th": "ส่งภาพถ่ายสติกเกอร์ Serial Number / MTM ที่อยู่ใต้เครื่องหรือด้านหลังเครื่อง",
    "en": "Send a photo of the Serial Number / MTM sticker on the bottom or back of the machine."
  },
  "Graphics Driver Update": {
    "th": "อัปเดต Driver ของ Graphics ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Graphics driver to the latest version."
  },
  "HDMI Port on notebook test": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Headphone test": {
    "th": "ทดสอบใช้งานร่วมกับหูฟังอื่น",
    "en": "Test with another headphone."
  },
  "Hotkey Driver Update": {
    "th": "อัปเดต Driver ของ Hotkey ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Hotkey driver to the latest version."
  },
  "Idepad > ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Idepad > ทดสอบ Run Diagnostics",
    "en": "Check Idepad > ทดสอบ Run Diagnostics."
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
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage > System Update > Check for updates."
  },
  "Lenovo Vantage Update": {
    "th": "ทดสอบอัปเดตไดรเวอร์ทั้งหมดผ่านโปรแกรม Lenovo Vantage",
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage > System Update > Check for updates."
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
  "Mic mute checked": {
    "th": "ตรวจสอบว่าไม่ได้ปิดเสียงไมโครโฟน",
    "en": "Check Mic mute."
  },
  "Microphone enhancement disabled": {
    "th": "ปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "en": "Disable Microphone Enhancement and test again."
  },
  "Minidump collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer > C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
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
  "Safe Mode test": {
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
  "Swap AC Power Cord": {
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
    "en": "Perform System Restore / Reset This PC: Choose an option > Troubleshoot > Advanced options > Reset This PC, then choose Keep my files or Remove everything and follow the on-screen steps."
  },
  "Test HDMI Port on Notebook": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Test Tiny without TIO Dock": {
    "th": "ทดสอบเครื่อง Tiny โดยไม่ต่อผ่าน TIO Dock",
    "en": "Test the Tiny without the TIO Dock."
  },
  "Thinkpad, TC Desktop, TC Tiny, AIO > ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Thinkpad, TC Desktop, TC Tiny, AIO > ทดสอบ Run Diagnostics",
    "en": "Check Thinkpad, TC Desktop, TC Tiny, AIO > ทดสอบ Run Diagnostics."
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
  "Update Graphics Driver": {
    "th": "อัปเดต Driver ของ Graphics ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Graphics driver to the latest version."
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
  "Voice Recorder": {
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
  "Wi-Fi Driver Update": {
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
  "กรณีจอ notebook ไม่มีภาพ > ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอ notebook ไม่มีภาพ > ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่",
    "en": "Check กรณีจอ notebook ไม่มีภาพ > ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่."
  },
  "กรณีจอเสีย หรือเป็นเส้น > ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอเสีย หรือเป็นเส้น > ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "en": "Check กรณีจอเสีย หรือเป็นเส้น > ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่."
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
      'Fan Check':'Fan spinning',
      'Caps Lock LED works':'Caps Lock Toggle'
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
    if(out.label === 'Can access Windows' || out.label === 'Can boot into BIOS' || out.label === 'Can boot into Safe Mode' || out.label === 'Physical damage / Liquid spilled' || out.label === 'Other issue') out.options = out.options || 'yesno';
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
