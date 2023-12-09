// RepositoryList.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RepositoryItem from "../Pacientes/PacientesRepositoryItem.js";

const RepositoryList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/Pacientes/All");
                if (!response.ok) {
                    throw new Error("Error al obtener datos de la API");
                }

                const data = await response.json();
                setDoctors(data); // Ajusta según la estructura real de la respuesta de la API
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Text>Cargando...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={doctors}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
        />
    );
};

export default RepositoryList;
