document.addEventListener('DOMContentLoaded', () => {
    const term = new Terminal({
        cursorBlink: true,
        theme: {
            background: '#0f172a',
            foreground: '#e5e7eb',
            cursor: '#a5b4fc',
        }
    });

    const fitAddon = new FitAddon.FitAddon();
    term.loadAddon(fitAddon);

    const terminalContainer = document.getElementById('terminal-container');
    term.open(terminalContainer);
    fitAddon.fit();

    const prompt = () => {
        term.write('\r\n$ ');
    };

    term.writeln('Welcome to Arun\'s Interactive Portfolio Terminal!');
    term.writeln('Type `help` to see a list of available commands.');
    prompt();

    let command = '';

    term.onKey(e => {
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

        if (e.domEvent.keyCode === 13) { // Enter
            if (command) {
                term.writeln('');
                handleCommand(command);
                command = '';
            }
            prompt();
        } else if (e.domEvent.keyCode === 8) { // Backspace
            if (command.length > 0) {
                term.write('\b \b');
                command = command.substr(0, command.length - 1);
            }
        } else if (printable) {
            term.write(e.key);
            command += e.key;
        }
    });

    function handleCommand(cmd) {
        const [command, ...args] = cmd.split(' ');
        switch (command) {
            case 'help':
                term.writeln('Available commands:');
                term.writeln('  help      - Shows this help message');
                term.writeln('  about     - Displays the about me section');
                term.writeln('  projects  - Lists key projects');
                term.writeln('  contact   - Shows contact information');
                term.writeln('  clear     - Clears the terminal');
                break;
            case 'about':
                term.writeln('I work in AI/ML not because it’s the obvious career path, but because it’s the only kind of work that feels like play to me...');
                break;
            case 'projects':
                term.writeln('Key Projects:');
                term.writeln('  - AI Learning Path Generator');
                term.writeln('  - AI Code Analyzer');
                term.writeln('  - Multimodal Medical Diagnosis Prototype');
                term.writeln('  - Agentception (Under Development)');
                break;
            case 'contact':
                term.writeln('Email: arunkiran721@gmail.com');
                term.writeln('LinkedIn: https://www.linkedin.com/in/arun-kumar-chukkala-391768204/');
                term.writeln('GitHub: https://github.com/arun3676');
                break;
            case 'clear':
                term.clear();
                term.writeln('Welcome to Arun\'s Interactive Portfolio Terminal!');
                term.writeln('Type `help` to see a list of available commands.');
                break;
            default:
                term.writeln(`Command not found: ${cmd}. Type 'help' for a list of commands.`);
        }
    }
});
