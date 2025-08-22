# `04` Validate your installation
To validate that your Windows 10 virtual machine in VirtualBox meets the course requirements, we will use a script that will generate a report of your VM on your host machine (your actual PC).

**Important!** Before proceeding, ensure your Windows virtual machine in VirtualBox meets these minimum requirements:
* **Operating System:** Windows 10 (64-bit).
* **Memory (RAM):** At least 2 GB (2048 MB) allocated to the VM.
* **CPUs (Processors):** At least 2 CPUs allocated to the VM.
    *(You can check and adjust this in the VM's settings in VirtualBox, under the "System" section, with the VM powered off).*

---

## 1. Add the `VBoxManage` command to your Host Machine's PATH (Windows)

This step is crucial for the script to be able to communicate with VirtualBox.

* **Find the location of `VBoxManage.exe`:**
    * Generally, it is located in the VirtualBox installation directory: `C:\Program Files\Oracle\VirtualBox`.
    * **Copy this full path.**

* **Access environment variable settings and modify the `Path` variable:**
    * Right-click the **Windows Start** button and select **System**.
    * In the System window, find and select **Advanced system settings**.
    * In the "System Properties" window, click the **Environment Variables...** button.
    * In the "System variables" section (the bottom one), find and select the variable named **`Path`**.
    * Click the **Edit...** button.
    * In the "Edit environment variable" window, click **New** (or click in an empty space and paste the path).
    * **Paste the path you copied earlier** (e.g., `C:\Program Files\Oracle\VirtualBox`).
    * Click **OK** on all open windows to save the changes.

* **Verify the configuration (very important):**
    * Open a new **Command Prompt (CMD)** or **PowerShell** window (by searching for "cmd" or "powershell" in the Start menu).
    * Type the following command and press Enter:
        ```bash
        VBoxManage --version
        ```
    * If you see a version number (e.g., `7.0.12r159484`), it means `VBoxManage` is in your `PATH` and Step 1 is completed successfully! If you receive an error, review the previous steps.

---

## 2. Execute the `report_windows.bat` script and upload the report

This script will generate a file with the configuration of all your virtual machines.

* **Download the `report_windows.bat` script:** This script is located inside the `./.learn/assets` folder in your LearnPack files (in your codespace). Download it to your host machine (your actual PC). You can right-click on the file in your codespace editor and look for a "Download" option.
* **Copy the downloaded `report_windows.bat` file to your Windows Desktop** (or an easy-to-find location).
* **Execute the script:** Double-click on `report_windows.bat`. You should see a Command Prompt window briefly appear and disappear.
* **Verify report generation:** After executing it, **a new file named `windows_report.txt` will have been created on the same Desktop.**

* **Copy `windows_report.txt` to the root of your LearnPack exercises:**
    * Open your codespace/LearnPack in your web browser.
    * Locate the main folder of your exercise. This is the folder where the `learn.json` file is located.
    * Drag and drop the `windows_report.txt` file from your Windows Desktop directly into the root folder of your LearnPack in the browser. Make sure it lands **at the same level as `learn.json`**. It should not be inside any subfolders like `.learn` or `assets`.

    > ⚠️ **The `windows_report.txt` file must be directly in the root of your project, next to the `learn.json` file!**

---

## 3. Run the validation test

Once you have copied the `windows_report.txt` file to the root of your LearnPack exercises, you can run the test to validate your Windows installation in VirtualBox.

* In the LearnPack interface, find the button or option to "Run Test" or "Validate" for this particular exercise.
* Click on it and wait for the results.

---

## 4. All Done!

If you see the message that your tests passed, **congratulations!** You have successfully installed and configured your Windows virtual machine in VirtualBox. This will be your safe space for experimentation and testing throughout the course.

If you encounter any issues, do not hesitate to contact a mentor or the other support channels offered by 4Geeks.
