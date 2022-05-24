type props = {
  color: string;
  count: number;
};

export const TextRemaining = ({ color, count }: props) => {
  return (
    <p className={`mx-auto text-right text-sm text-${color}`}>
      あと {count} 文字
    </p>
  );
};
