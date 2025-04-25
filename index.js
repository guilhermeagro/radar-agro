import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RadarAgro() {
  const [perfil, setPerfil] = useState(null);
  const [localizacao, setLocalizacao] = useState("");

  const handlePerfil = (tipo) => setPerfil(tipo);

  const renderConteudo = () => {
    if (!perfil) return null;
    return (
      <div className="mt-4">
        <Input
          placeholder="Digite sua cidade ou região"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold mb-2">Clima Atual</h2>
              <p>Temperatura: 27°C</p>
              <p>Umidade: 65%</p>
              <p>Previsão: Céu parcialmente nublado</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-xl font-bold mb-2">Vegetação / NDVI</h2>
              <p>Nível de vegetação: Moderado</p>
              <p>Índice NDVI: 0.52</p>
              {perfil === "consultor" && <p>NDVI Médio Regional: 0.48 / Tendência de queda</p>}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent>
              <h2 className="text-xl font-bold mb-2">Recomendações</h2>
              {perfil === "produtor" ? (
                <p>Evite pastejo excessivo esta semana. Considere suplementação leve.</p>
              ) : (
                <p>
                  A tendência de redução do NDVI e da umidade sugere intensificar o monitoramento do
                  pasto e considerar estratégias de adubação nitrogenada para manutenção da cobertura.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Radar Agro</h1>
      <p className="text-center mb-4">
        Selecione seu perfil para obter dados personalizados da sua região:
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => handlePerfil("produtor")}>Sou Produtor</Button>
        <Button onClick={() => handlePerfil("consultor")}>Sou Consultor</Button>
      </div>
      {renderConteudo()}
    </div>
  );
}
