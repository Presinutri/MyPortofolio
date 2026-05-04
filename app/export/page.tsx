import HomeContent from '../page.mdx';
import Project1 from '../n/1/page.mdx';
import Project2 from '../n/2/page.mdx';
import Project3 from '../n/3/page.mdx';
import Project4 from '../n/4/page.mdx';
import Project5 from '../n/5/page.mdx';
import Project6 from '../n/6/page.mdx';
import { AutoPrint } from '../components/AutoPrint';

export const metadata = {
  title: 'Export Portfolio',
};

export default function ExportPage() {
  return (
    <div className="w-full bg-white text-slate-900 pb-20">
      <AutoPrint />
      
      {/* Home Page Content */}
      <div className="print-section">
        <HomeContent />
      </div>

      {/* Projects */}
      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project1 />
      </div>

      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project2 />
      </div>

      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project3 />
      </div>

      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project4 />
      </div>

      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project5 />
      </div>

      <div className="print:break-before-page break-before-page mt-24 pt-16 border-t-8 border-slate-900">
        <Project6 />
      </div>
    </div>
  );
}
