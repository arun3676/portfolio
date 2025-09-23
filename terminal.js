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
        const [command, ...args] = cmd.toLowerCase().split(' ');
        switch (command) {
            case 'help':
                term.writeln('Available commands:');
                term.writeln('  help          - Shows this help message');
                term.writeln('  about         - Displays the about me section');
                term.writeln('  skills        - Lists core skills');
                term.writeln('  experience    - Shows professional experience');
                term.writeln('  projects      - Lists key projects');
                term.writeln('  journal       - Shows recent journal entries');
                term.writeln('  contact       - Shows contact information');
                term.writeln('  clear         - Clears the terminal');
                break;
            case 'about':
                term.writeln('\r\n\e[1;36mAbout Me\e[0m');
                term.writeln('------------------------------------');
                term.writeln('I work in AI/ML not because it’s the obvious career path, but because it’s the only kind of work that feels like play to me. When I’m experimenting with models, building agents, or pushing LLMs into new use cases, I don’t feel like I’m “on the clock.” I feel like I’m solving puzzles that I actually want to be stuck with.');
                term.writeln('');
                term.writeln('I’ve had my share of self-doubt and leaned on AI tools to help me code and deliver. But that doesn’t take away from what I bring—it shows how I work. I use every resource at my disposal to move fast, learn deeply, and build things that actually run. The point isn’t typing every line by hand—it’s creating systems that work in the real world.');
                break;
            case 'skills':
                term.writeln('\r\n\e[1;36mCore Skills\e[0m');
                term.writeln('------------------------------------');
                term.writeln('Languages: Python, SQL, JavaScript');
                term.writeln('LLM Stack: LangChain, LlamaIndex, ChromaDB, Pinecone, vLLM');
                term.writeln('Frameworks: PyTorch, TensorFlow, Hugging Face Transformers');
                term.writeln('Concepts: RAG, Agent Orchestration, Fine-Tuning (LoRA/PEFT), Prompt Engineering');
                term.writeln('Infrastructure: Docker, GCP, AWS, Kubernetes (basic)');
                break;
            case 'experience':
                term.writeln('\r\n\e[1;36mIndependent AI Engineer / Researcher (2023 – Present)\e[0m');
                term.writeln('---------------------------------------------------');
                term.writeln('- Built 15+ LLM-powered prototypes covering RAG, agent systems, and evaluation frameworks.');
                term.writeln('- Experimented with fine-tuning and inference optimization using vLLM, LoRA, and lightweight deployment strategies.');
                term.writeln('- Actively applying multi-agent orchestration patterns (ReAct, LangGraph) to real-world tasks.');
                term.writeln('- Publishing open-source projects on GitHub with working demos.');
                break;
            case 'projects':
                term.writeln('\r\n\e[1;36mKey Projects\e[0m');
                term.writeln('------------------------------------');
                term.writeln('  - AI Learning Path Generator');
                term.writeln('  - AI Code Analyzer');
                term.writeln('  - Multimodal Medical Diagnosis Prototype');
                term.writeln('  - Agentception (Under Development)');
                break;
            case 'journal':
                term.writeln('\r\n\e[1;36mJournal & Reflections\e[0m');
                term.writeln('------------------------------------');
                term.writeln('- Building Agentception: Lessons from designing a multi-agent system.');
                term.writeln('- RAG in Practice: What I learned about chunking and retrieval failures.');
                term.writeln('- Work That Feels Like Play: Why I’ll always choose AI work over anything else.');
                break;
            case 'contact':
                term.writeln('\r\n\e[1;36mContact\e[0m');
                term.writeln('------------------------------------');
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
