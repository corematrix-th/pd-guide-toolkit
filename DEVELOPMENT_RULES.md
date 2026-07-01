# PD Guide Toolkit - Development Rules

Version: 4.7.6

## Project workflow
- Treat user requests for a future version as backlog only.
- Create a new ZIP only when the user explicitly asks to make/build a specific version.
- Version names must use only the version number. Do not add suffixes such as Update or Final.
- ZIP name, root folder name, and UI version must match.

## Protected sections
- Do not modify Error Code or Troubleshooting Guide unless the user explicitly authorizes it.
- For v4.7.6, Error Code Description and BIOS/Supervisor Password Description are authorized.

## Product structure
- Dock category must exist only under ThinkPad.
- Other product lines must not show Dock.
- Use AIO instead of All in One.

## Checklist design
- Use existing checklist items by default. Do not invent items unless the user explicitly requests an addition.
- Order checklist items by real troubleshooting workflow and dependency, not by rigid category only.
- Keep related items together, such as Device Manager -> Uninstall Driver -> Driver Update.
- Windows-based checks should generally come before restart/BIOS-heavy checks when appropriate.
- Physical damage / Liquid spilled must be before Other issue.
- Other issue must be the last checklist item.

## Naming standards
- Use device-specific driver labels: <Device> Driver Update.
- Do not use generic Driver Update.
- Use Swap <Device> for swapping with another known-good device.
- Use <Device> test on other machine when testing the same device on another system.
- Do not add unnecessary External wording to checklist labels when product context is clear.
- Standardize terminology/capitalization, for example: USB Device, Power Cord, DisplayPort, USB-C cable, Audio Jack.

## Reset terminology
- ThinkPad uses Power Reset / Emergency Reset.
- Other product lines use Power Reset only.
- Do not use the removed power-discharge checklist wording.

## Swap eligibility
- Notebook internal keyboards should not use Swap Keyboard; use USB Keyboard test / external keyboard verification instead.
- Desktop/AIO keyboards may use Swap Keyboard because they are external devices.
- Apply swap only when the device is realistic to swap during field/customer troubleshooting.

## FRU P/N
- Request FRU P/N only for optional external accessories when appropriate: Adapter, Power Cord, External Keyboard, External Mouse.
- Do not request FRU P/N for internal FRUs unless the user explicitly requests it.

## Conclusion UI
- Conclusion displays Result and Part only.
- Do not show Recommendation in the CONCLUSION panel.
