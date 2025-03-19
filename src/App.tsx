import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AmandaLopesSouza.png",
      name: "Amanda Souza",
      role: "Desenvolvedora Web",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "Hoje finalizei um projeto incrível que vai facilitar a vida de muitos devs! 🚀",
      },
      {
        type: "paragraph",
        content:
          "Criei uma plataforma de compartilhamento de snippets de código, onde você pode salvar, organizar e compartilhar trechos úteis. Espero que ajude vocês! 😊",
      },
      { type: "link", content: "👉 codesnippets.dev/amanda" },
    ],
    publishedAt: new Date("2025-03-18 14:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala devs! 👨‍💻🔥" },
      {
        type: "paragraph",
        content:
          "Você já se perguntou como tornar seus projetos mais performáticos e escaláveis? 💡",
      },
      {
        type: "paragraph",
        content:
          "Acabei de escrever um artigo detalhado sobre técnicas de otimização para React. Se você quer levar sua aplicação para o próximo nível, não deixe de conferir!",
      },
      { type: "link", content: "👉 codesnippets.dev/react-performance" },
    ],
    publishedAt: new Date("2025-03-18 08:15:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador e Dev Fullstack",
    },
    content: [
      { type: "paragraph", content: "E aí, devs! 🚀" },
      {
        type: "paragraph",
        content:
          "Estive testando uma nova abordagem para otimizar o aprendizado de código. Já pensou em aprender React construindo pequenos desafios diários? 🔥",
      },
      {
        type: "paragraph",
        content:
          "Lancei um repositório com desafios práticos para quem quer turbinar suas skills em JavaScript e React!",
      },
      { type: "link", content: "👉 github.com/maykbrito/daily-challenges" },
    ],
    publishedAt: new Date("2025-03-17 12:45:00"),
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/raphamorim.png",
      name: "Rapha Morim",
      role: "Engenheiro de Software",
    },
    content: [
      { type: "paragraph", content: "Bom dia, devs! 🌅" },
      {
        type: "paragraph",
        content:
          "Se você trabalha com performance web, precisa conhecer o conceito de Server Components no React! 🧠",
      },
      {
        type: "paragraph",
        content:
          "Escrevi um artigo completo explicando como utilizá-los para melhorar a velocidade da sua aplicação.",
      },
      { type: "link", content: "👉 webperformance.dev/server-components" },
    ],
    publishedAt: new Date("2025-03-16 18:30:00"),
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/loiane.png",
      name: "Loiane Groner",
      role: "Especialista em Java e Angular",
    },
    content: [
      { type: "paragraph", content: "Fala galera! 🎯" },
      {
        type: "paragraph",
        content:
          "Para quem curte TypeScript, fiz um tutorial completo sobre como melhorar o uso de tipos avançados no seu código! 🦸‍♀️",
      },
      {
        type: "paragraph",
        content:
          "Com exemplos práticos e dicas valiosas para evitar dores de cabeça no desenvolvimento!",
      },
      { type: "link", content: "👉 devto.com/loiane/advanced-typescript" },
    ],
    publishedAt: new Date("2025-03-14 10:08:13"),
  },
  {
    id: 6,
    author: {
      avatarUrl: "https://github.com/felipefialho.png",
      name: "Felipe Fialho",
      role: "Frontend Engineer @ Medallia",
    },
    content: [
      { type: "paragraph", content: "Fala, galera! 🎨" },
      {
        type: "paragraph",
        content:
          "Acabei de lançar um projeto Open Source para melhorar a acessibilidade em aplicações React! ♿🚀",
      },
      {
        type: "paragraph",
        content:
          "Se você quer aprender mais sobre **A11Y**, dá uma olhada nesse repositório e contribua com melhorias!",
      },
      { type: "link", content: "👉 github.com/felipefialho/react-a11y" },
    ],
    publishedAt: new Date("2025-03-13 16:20:00"),
  },
  {
    id: 7,
    author: {
      avatarUrl: "https://github.com/danilowoz.png",
      name: "Danilo Woz",
      role: "UI/UX Designer & Frontend Dev",
    },
    content: [
      { type: "paragraph", content: "Designers e Devs, atenção! 🎨💻" },
      {
        type: "paragraph",
        content:
          "Criei uma **biblioteca de componentes** incrível para melhorar a experiência do usuário no React! 🚀",
      },
      {
        type: "paragraph",
        content:
          "Se você quer criar interfaces mais elegantes e intuitivas, confere esse projeto!",
      },
      { type: "link", content: "👉 github.com/danilowoz/ui-library" },
    ],
    publishedAt: new Date("2025-03-12 09:00:00"),
  },
  {
    id: 8,
    author: {
      avatarUrl: "https://github.com/thiagoloureiro.png",
      name: "Thiago Loureiro",
      role: "Backend Engineer",
    },
    content: [
      { type: "paragraph", content: "Olá, devs! ⚡" },
      {
        type: "paragraph",
        content:
          "Quer aprender sobre **Serverless Functions**? Acabei de publicar um artigo completo sobre como utilizá-las no seu backend!",
      },
      {
        type: "paragraph",
        content:
          "Se você quer um backend escalável e performático, dá uma conferida!",
      },
      { type: "link", content: "👉 dev.to/thiago/serverless-functions" },
    ],
    publishedAt: new Date("2025-03-11 14:45:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
