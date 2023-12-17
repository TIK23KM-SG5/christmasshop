import { signal, effect } from "@preact/signals-react";

export const cartSignal = signal([]);

effect(() => {
    const prod = cartSignal.value;

    if (prod.length !== 0) {
        const updatedStorageCart = cartSignal.value;
        localStorage.setItem("cart", JSON.stringify(updatedStorageCart));
    }
});