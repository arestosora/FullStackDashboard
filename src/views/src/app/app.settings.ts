export const App = {
    API_ENDPOINT: 'http://localhost:8000',
}

export const CuentasCSVOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Cuentas Disponibles',
    useBom: true,
    noDownload: false,
    headers: ["ID","Nombres", "Apellidos", "Email", "Identificacion", "Fecha de Nacimiento", "Username", "Password", "Celular"]
  };
