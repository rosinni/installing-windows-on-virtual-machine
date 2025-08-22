@echo off 
set /a "count=0"
set id[0]=

set program_path=%programfiles%\Oracle\VirtualBox\VBoxManage

echo --------- > windows_report.txt
for /f "tokens=*" %%a in ('"%program_path%" list vms') do (
  set "extracted_value="
  for /f "tokens=2* delims={*}" %%b in ("%%a") do (
    if not "%%b" == "" (     
      "%program_path%" showvminfo --machinereadable %%b >> windows_report.txt    
    )
  )
  echo --------- >> windows_report.txt
)
