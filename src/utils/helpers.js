// Constantes do sistema
export const SYSTEM_MODULES = [
    { id: 'dashboard', label: 'Visão Geral (Dashboard)' },
    { id: 'vendas', label: 'Vendas de Serviços' },
    { id: 'clientes', label: 'Gestão de Clientes' },
    { id: 'processar', label: 'Relatórios de Comissão (Processamento)' },
    { id: 'nfe', label: 'Emissor NFS-e (Prefeitura)' },
    { id: 'historico', label: 'Histórico de Relatórios Salvos' },
    { id: 'gestor', label: 'Gestor de Extratos (Arquivos Internos)' },
    { id: 'usuarios', label: 'Controle de Acessos e Permissões' },
    { id: 'settings', label: 'Configurações do Sistema e Backups' }
];

export const EMPRESAS_INTERNAS = ["Protetta"];
export const CATEGORIAS = ["Operadoras", "Seguradoras"];
export const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export const dataDeHojeInterna = () => new Date().toISOString().split('T')[0];

export const formatarMoeda = (valor) => {
    if (valor == null) return '0,00';
    const num = Number(valor);
    return isNaN(num) ? '0,00' : num.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const formatarDataVisivel = (dataString) => {
    if(!dataString) return '--/--/----';
    const partes = dataString.split('-');
    return partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : dataString;
};

export const printColLabels = {
    cod: 'Cód.', contrato: 'Contrato', op: 'Op.', vidas: 'Vidas', 
    cliente: 'Cliente', data: 'Data', loja: 'Loja', servico: 'Serviço', 
    desconto: 'Desc.', corretor: 'Corretor', parc: 'Parc.', 
    inicioVig: 'Início Vig.', nfe: 'NF-e', vitalicio: 'Vitalício', 
    assessoria: 'Assessoria', pagamento: 'Pagamento', valorTotal: 'Valor Total', comissao: 'Comissão'
};

export const defaultPrintCols = Object.keys(printColLabels).reduce((acc, key) => ({ ...acc, [key]: true }), {});