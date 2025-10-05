type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="md:container lg:max-w-5xl mx-auto px-5 md:px-0 py-15">
      {children}
    </div>
  );
}
