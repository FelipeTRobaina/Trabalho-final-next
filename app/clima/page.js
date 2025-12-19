import Link from 'next/link';
import styles from './clima.module.css'; 

async function getClima() {
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=-32.035&longitude=-52.098&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=America%2FSao_Paulo',
    { 
      next: { revalidate: 900 }
    }
  );

  if (!res.ok) {
    throw new Error('Falha ao carregar dados do tempo');
  }

  return res.json();
}

export default async function ClimaPage() {
  const dados = await getClima();
  const tempo = dados.current;

  const dataVerificacao = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric' 
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>Rio Grande - RS</h1>
        <p>Previsão Atual (ISR - 15min)</p>
        
        <div className={styles.temperatura}>
          {Math.round(tempo.temperature_2m)}°C
        </div>
        
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>💨 Vento: {tempo.wind_speed_10m} km/h</div>
          <div className={styles.infoItem}>💧 Umidade: {tempo.relative_humidity_2m}%</div>
        </div>

        <p className={styles.obs}>
          Dados coletados em: <strong>{dataVerificacao}</strong>
          <br />
        </p>

        <Link href="/" className={styles.botaoVoltar}>
          ← Voltar para Home
        </Link>
      </div>
    </div>
  );
}