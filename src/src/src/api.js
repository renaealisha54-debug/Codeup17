// src/api.js
export const API = {
    async executeTask(taskName) {
        try {
            const response = await fetch('http://localhost:3000/api/codeup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: taskName })
            });
            return await response.json();
        } catch (err) {
            console.error("Communication error:", err);
            return { error: true, message: "Backend unreachable" };
        }
    }
};
