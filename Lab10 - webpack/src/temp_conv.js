export const F_to_C = (valNum) => {
    return (valNum-32) / 1.8;
}
export const F_to_K = (valNum) => {
    return ((valNum-32)/1.8)+273.15;
}

export const C_to_F = (valNum) => {
    return (valNum*1.8)+32;
}
export const C_to_K = (valNum) => {
    return valNum+273.15;
}

export const K_to_F = (valNum) => {
    return ((valNum-273.15)*1.8)+32;
}
export const K_to_C = (valNum) => {
    return valNum-273.15;
}
