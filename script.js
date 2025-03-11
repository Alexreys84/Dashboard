// Dados iniciais
const initialData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas 2023',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  
  // Configuração do gráfico de linha
  const lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: initialData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de Linha - Vendas Mensais'
        }
      }
    }
  });
  
  // Configuração do gráfico de barras
  const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: initialData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de Barras - Vendas Mensais'
        }
      }
    }
  });
  
  // Configuração do gráfico de pizza
  const pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['Vendas Online', 'Vendas Loja', 'Vendas Diretas'],
      datasets: [{
        label: 'Vendas por Canal',
        data: [300, 150, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de Pizza - Vendas por Canal'
        }
      }
    }
  });
  
  // Configuração do gráfico de rosca
  const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Produto A', 'Produto B', 'Produto C'],
      datasets: [{
        label: 'Vendas por Produto',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de Rosca - Vendas por Produto'
        }
      }
    }
  });
  
  // Função para atualizar dados (exemplo de interatividade)
  function updateData() {
    const newData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Vendas 2023',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100)
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  
    lineChart.data = newData;
    barChart.data = newData;
    lineChart.update();
    barChart.update();
  }
  
  // Atualizar dados a cada 5 segundos
  setInterval(updateData, 5000);
