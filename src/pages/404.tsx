import { MainLayout } from "src/components/layouts/MainLayout";
import { ThemeColor } from "src/components/utils/ThemeColor";

const Custom404 = () => {
  const themeColor = ThemeColor();
  return (
    <div className={themeColor}>
      <MainLayout themeColor={themeColor}>
        <div className="container py-40 text-2xl">
          お探しのページは見つかりませんでした...
        </div>
      </MainLayout>
      ;
    </div>
  );
};
export default Custom404;
