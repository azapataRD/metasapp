function Detalles() {
    const opcionesDeFrecuencia = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

    return (
        <div>
            <form>
                <label>
                </label>
                <label>
                    Con que frecuencia deseas cumplir tu meta?<span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select>
                            {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                            <option value="dia">al dia</option>
                            <option value="semana">a la semana</option>
                            <option value="mes">al mes</option>
                            <option value="año">al año</option>
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar estas meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha límite?
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label>
                    <select>
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>

            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles; 