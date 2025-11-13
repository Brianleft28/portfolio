<script lang='ts'>
    import folder from '$lib/img/folder_main.png';
</script>
<div class=" technical-layout">
    <header class="row">
        <h3 class="col-12 path-header">Índice de C:\src\proyectos\proyecto-1.md<!-- {$currentPath} --></h3>
        <hr>
    </header>
    <div class="row main-content">
        <div class="col-md-5 file-explorer-nav">
            <div class="directory-root">
                <img src={folder} alt="folder icon" width="18" height="18" />
                <a class="directory-name">[directorio principal]</a>
            </div>
        <!-- <NavegacionDirectorios /> -->
        </div> 

        <div class="col-md-7 file-content-area">
        </div>
    </div>
</div>
<style>
.path-header {
    font-family: "Fira Code", monospace;
    font-weight: 500; /* Semi-bold */
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.technical-layout {
    font-family: 'Inter', sans-serif; 
    min-height: 100vh;
}

.file-explorer-nav {
    font-family: 'Fira Code', Consolas, monospace;
    padding-right: 20px;
}


.file-content-area {
    font-family: 'Fira Code', Consolas, monospace;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.file-content-area pre, 
.file-content-area code {
    /* Aseguramos que el código use la fuente técnica */
    font-family: 'Fira Code', Consolas, monospace !important; 
    background-color: #282c34; /* Fondo de código oscuro y contrastante */
    color: #abb2bf;
    border: none;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
}
a .directory-name {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: inherit !important;
    text-decoration: none !important;
}

a .directory-name .active {
    font-weight: bold;
    text-decoration: underline !important;
    color: "#D0ADF0" !important;
}
</style>