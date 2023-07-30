

interface IProps {
  content: string;
  color: string;
  id: string;

}

export default function Page({ content, color, id }: IProps) {



  return (
    <div className="main" >
      <div className="content" style={{ backgroundColor: color }} id={id}>
        {content}
      </div>
    </div>
  );
}
