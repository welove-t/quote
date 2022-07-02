type props = {
  color: string;
  count: number;
};

export const TextRemaining = ({ color, count }: props) => {
  return (
    <p
      className={`mx-auto text-right text-sm font-light text-gray-600 dark:text-gray-100 text-${color}`}
    >
      あと {count} 文字
    </p>
  );
};
