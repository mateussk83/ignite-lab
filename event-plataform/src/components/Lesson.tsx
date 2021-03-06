import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { isPast , format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
//isPast do date-fns ela verifica se a data ja passou
// como precisamos utilizar informações de fora do projeto usamos Propriedades
// Interface é onde declaramos todas as nossas variaveis do mundo externo 
// a | funciona como um or = live ou class 
// sempre que utilizar uma variavel colocar dentro de chaves
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}
export function Lesson(props: LessonProps) {

  const { slug } = useParams<{ slug : string}> ()

  const isLessonAvailable = isPast(props.availableAt) // caso a availableAt ja passou ela fica true entao mostra o conteudo se nao fica false e mostra o em breve
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  }) // formata a data ver na documentação as formatações possiveis "" serve para mostrar a biblioteca que precisa formatar e '' é que nao precisa formatar

  const isActiveLesson = slug == props.slug;

  return (
    // texto importante utilizar strong**
    // rounded border = borda arredondada 
    // border = borda de 1px solida
    // justify-between faz com que manda um toltalmente pra esquerda e o outro totalmente pra direita
    // text-sm = fonte de 14 pix 
    // text-xs = fonte de 12 pix
    // fonte-bolde = negrito 
    // utiliza a biblioteca Phosphor igual se usa um componente
    // e quando utilizarmos numero no TS precisamos colocar {}
    // propriedade size = tamanho
    // == -> igual
    // ? ->  se entao 
    // : -> se nao entao 
    // group serve para dizer que nao só um elemento especifico vai receber a propriedade ali diz que todo sos elementos dentro do link a vai receber o group-hover:border-green-500
    // quando usamos o react-router-dom para roteamento nao usamos a ancora padrão chamada a utilizamos o LINK 
    // O link vc coloca o link ali
    // quando queremos ocasionar o css do tailwind atraves de uma variavel como slug
     <Link to={`/event/lesson/${props.slug}`} className="group">
    <span className="text-gray-300">
      {availableDateFormatted}
    </span> 
    
    <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson == true ? 'bg-green-500' : ''}`}>
      <header className="flex items-center justify-between">
        {isLessonAvailable ? (
    <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${isActiveLesson == true ? 'text-white' : '' }`}>
    <CheckCircle size={20} />
    Conteudo liberado
    </span>
        ) : (
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
          <Lock size={20} />
          Em breve
          </span>
        ) }
    <span className={`text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold ${isActiveLesson == true ? 'border-white' : '' }`}>
      {props.type == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
      </span>
      </header>
      
      <strong className={`mt-5 block ${isActiveLesson == true ? "text-white" : "text-gray-200"}`}>
      {props.title}
      </strong>
    </div>
    </Link>
    )
        }