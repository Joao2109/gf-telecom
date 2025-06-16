// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cliente = ({ user }: { user: any }) => {
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold">Central do assinante</h1>
      <p className="text-center">Plano: {user.plano.replace("MB", "")}MB</p>
    </div>
  );
};

export default Cliente;
