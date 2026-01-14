document.addEventListener('DOMContentLoaded', () => {
    // Costo interno fijo por kWh (NO se muestra al usuario)
    const INTERNAL_COST_PER_KWH = 2000;

    // Elements - Monthly Calculator
    const monthlyKwhInput = document.getElementById('monthlyKwh');
    const monthlyTotalEl = document.getElementById('monthlyTotal');

    // Format Currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    };

    // Format Number with thousands separator (1.000.000,00)
    const formatNumber = (value) => {
        if (!value) return '';

        let valStr = value.toString();
        let hasComma = valStr.includes(',');

        let integerPart = '';
        let decimalPart = '';

        if (hasComma) {
            let split = valStr.split(',');
            integerPart = split[0].replace(/\D/g, '');
            decimalPart = split[1] ? split[1].slice(0, 2) : '';
        } else {
            integerPart = valStr.replace(/\D/g, '');
        }

        // Add thousands dots
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        if (hasComma && decimalPart) {
            return `${integerPart},${decimalPart}`;
        }
        return integerPart;
    };

    // Parse Number (1.000,00 -> 1000.00)
    const parseNumber = (value) => {
        if (!value) return 0;
        const cleanValue = value.toString().replace(/\./g, '').replace(',', '.');
        return parseFloat(cleanValue) || 0;
    };

    // Handle Input Formatting
    const handleInput = (e) => {
        const input = e.target;
        const originalValue = input.value;
        const lastChar = originalValue.slice(-1);

        // Convert dot to comma for decimal separator
        if (lastChar === '.') {
            if (!originalValue.slice(0, -1).includes(',')) {
                input.value = originalValue.slice(0, -1) + ',';
                return;
            }
        }

        const formatted = formatNumber(input.value);

        if (input.value !== formatted) {
            input.value = formatted;
        }
    };

    // Calculate Monthly Total (usa costo interno fijo)
    const calculateMonthly = () => {
        const monthlyKwh = parseNumber(monthlyKwhInput.value);
        const total = INTERNAL_COST_PER_KWH * monthlyKwh;
        monthlyTotalEl.textContent = formatCurrency(total);
    };

    monthlyKwhInput.addEventListener('input', (e) => {
        handleInput(e);
        calculateMonthly();
    });

    // Initial calculation
    calculateMonthly();
});
