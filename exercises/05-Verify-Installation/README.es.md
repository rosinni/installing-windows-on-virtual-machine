# `04` Valida tu instalación

Para validar que tu máquina virtual de Windows 10 en VirtualBox cumple con los requisitos del curso, utilizaremos un script que generará un informe de tu VM en tu máquina anfitriona (tu PC real).

**¡Importante!** Antes de continuar, asegúrate de que tu máquina virtual de Windows en VirtualBox cumple con estos requisitos mínimos:
* **Sistema Operativo:** Windows 10 (64-bit).
* **Memoria (RAM):** Al menos 2 GB (2048 MB) asignados a la VM.
* **CPUs (Procesadores):** Al menos 2 CPUs asignados a la VM.
    *(Puedes verificar y ajustar esto en la configuración de la VM en VirtualBox, en la sección "Sistema", con la VM apagada).*

---

## 1. Agrega el comando `VBoxManage` al PATH de tu máquina anfitriona (Windows)

Este paso es crucial para que el script pueda comunicarse con VirtualBox.

* **Encuentra la ubicación de `VBoxManage.exe`:**
    * Generalmente, se encuentra en el directorio de instalación de VirtualBox: `C:\Program Files\Oracle\VirtualBox`.
    * **Copia esta ruta completa.**

* **Accede a la configuración de variables de entorno y modifica la variable `Path`:**
    * Haz clic derecho en el botón **Inicio de Windows** y selecciona **Sistema**.
    * En la ventana de Sistema, busca y selecciona **Configuración avanzada del sistema**.
    * En la ventana "Propiedades del sistema", haz clic en el botón **Variables de entorno...**.
    * En la sección "Variables del sistema" (la de abajo), busca y selecciona la variable llamada **`Path`**.
    * Haz clic en el botón **Editar...**.
    * En la ventana "Editar variable de entorno", haz clic en **Nuevo** (o haz clic en un espacio vacío y pega la ruta).
    * **Pega la ruta que copiaste anteriormente** (ej: `C:\Program Files\Oracle\VirtualBox`).
    * Haz clic en **Aceptar** en todas las ventanas abiertas para guardar los cambios.

* **Verifica la configuración (muy importante):**
    * Abre una nueva ventana de la **Línea de Comandos (CMD)** o **PowerShell** (buscando "cmd" o "powershell" en el menú de inicio).
    * Escribe el siguiente comando y presiona Enter:
        ```bash
        VBoxManage --version
        ```
    * Si ves un número de versión (ej: `7.0.12r159484`), ¡significa que `VBoxManage` está en tu `PATH` y el Paso 1 está completado correctamente! Si recibes un error, revisa los pasos anteriores.

---

## 2. Ejecuta el script `report_windows.bat` y sube el informe

Este script generará un archivo con la configuración de todas tus máquinas virtuales.

* **Descarga el script `report_windows.bat`:** Este script se encuentra dentro de la carpeta `./.learn/assets` en los archivos de tu LearnPack (en tu codespace). Descárgalo a tu máquina anfitriona (tu PC real). Puedes hacer clic derecho en el archivo en tu editor de codespace y buscar una opción para "Descargar" (Download).
* **Copia el archivo `report_windows.bat` descargado a tu Escritorio** de Windows (o a una ubicación fácil de encontrar).
* **Ejecuta el script:** Haz doble clic en `report_windows.bat`. Deberías ver una ventana de Línea de Comandos aparecer y desaparecer rápidamente.
* **Verifica la generación del informe:** Después de ejecutarlo, **se habrá creado un nuevo archivo llamado `windows_report.txt` en el mismo Escritorio.**

* **Copia `windows_report.txt` a la raíz de tus ejercicios en LearnPack:**
    * Abre tu codespace/LearnPack en tu navegador web.
    * Localiza la carpeta principal de tu ejercicio. Esta es la carpeta donde se encuentra el archivo `learn.json`.
    * Arrastra y suelta el archivo `windows_report.txt` desde tu Escritorio de Windows directamente a la carpeta raíz de tu LearnPack en el navegador. Asegúrate de que caiga **al mismo nivel que `learn.json`**. No debe estar dentro de ninguna subcarpeta como `.learn` o `assets`.

    > ⚠️ **¡El archivo `windows_report.txt` debe estar directamente en la raíz de tu proyecto, junto al archivo `learn.json`!**

---

## 3. Ejecuta la prueba de validación

Una vez que hayas copiado el archivo `windows_report.txt` a la raíz de tus ejercicios en LearnPack, puedes ejecutar la prueba para validar tu instalación de Windows en VirtualBox.

* En la interfaz de LearnPack, busca el botón o la opción para "Ejecutar Prueba" o "Validar" para este ejercicio en particular.
* Haz clic en él y espera los resultados.

---

## 4. ¡Todo listo!

Si ves el mensaje de que pasaste las pruebas, **¡felicidades!** Has instalado y configurado correctamente tu máquina virtual de Windows en VirtualBox. Este será tu lugar seguro para hacer experimentos y pruebas durante el curso.

Si tienes algún problema, no dudes en contactar a un mentor o a los otros canales de soporte ofrecidos por 4Geeks.
