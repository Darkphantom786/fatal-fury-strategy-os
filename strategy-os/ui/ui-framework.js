class UIFramework {

    createCard(title, content = "") {

        return `
            <div class="strategy-card">

                <div class="strategy-card-header">
                    <h2>${title}</h2>
                </div>

                <div class="strategy-card-body">
                    ${content}
                </div>

            </div>
        `;

    }

    createTable(headers, rows) {

        let html = `
            <table class="strategy-table">

                <thead>

                    <tr>
        `;

        headers.forEach(header => {

            html += `<th>${header}</th>`;

        });

        html += `
                    </tr>

                </thead>

                <tbody>
        `;

        rows.forEach(row => {

            html += "<tr>";

            row.forEach(column => {

                html += `<td>${column}</td>`;

            });

            html += "</tr>";

        });

        html += `
                </tbody>

            </table>
        `;

        return html;

    }

    createBadge(text, type = "default") {

        return `
            <span class="badge badge-${type}">
                ${text}
            </span>
        `;

    }

}

const uiFramework = new UIFramework();

export default uiFramework;
