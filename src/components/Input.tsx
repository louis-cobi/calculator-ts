interface InputProps {
    input: string;
    error: boolean;
  }
  
  export default function Input({ input, error }: InputProps) {
    return (
      <div className="input-container">
        {error ? <h1>Error</h1> : <h1>{input ? input : "0"}</h1>}
      </div>
    );
  }