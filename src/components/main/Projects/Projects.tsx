import { ComponentStyle as S } from './Projects.styled';

const project = [
  {
    num: '(01)',
    date: '2024/03',
    title: '28CM - (29CM CLONE CODING)',
    github: 'https://github.com/yuziwoo/29cm-mob-clone',
    website: 'https://yuziwoo.netlify.app/',
  },
  {
    num: '(02)',
    date: '2024/02',
    title: 'PUBLISHING SHOWCASE',
    github: 'https://github.com/yuziwoo/portfolio',
    website: 'https://www.yuziwoo.com/',
  },
  {
    num: '(03)',
    date: '2024/03',
    title: 'HYUNDAI LIVART RENEWAL',
    github: 'https://github.com/yuziwoo/hyundailivart',
    website: 'https://yuziwoo.github.io/hyundailivart/',
  },
  {
    num: '(04)',
    date: '2024/01',
    title: 'TODO CALENDAR APP',
    github: 'https://github.com/yuziwoo/today-todo',
    website: 'http://yuziwoo1.dothome.co.kr/',
  },
];

const Projects = () => {
  return (
    <S.Component>
      <S.Years>2024</S.Years>

      {project.map(({ num, date, title, github, website }) => (
        <S.Project key={num}>
          <S.Info>
            <S.NumAndDate>
              <S.Num>{num}</S.Num>
              <S.Date>{date}</S.Date>
            </S.NumAndDate>
            <S.Title href={website} target="_blank">
              <h1>{title}</h1>
              <h1>{title}</h1>
            </S.Title>
          </S.Info>

          <S.Site>
            <S.Anchor href={github} target="_blank">
              <p>GITHUB</p>
              <p>GITHUB</p>
            </S.Anchor>
            <S.Anchor href={website} target="_blank">
              <p>WEBSITE</p>
              <p>WEBSITE</p>
            </S.Anchor>
          </S.Site>
        </S.Project>
      ))}
    </S.Component>
  );
};

export default Projects;
