import SubjectPage from '../../[slug]/page';
export default async function UttarakhandSectionPage({params}){
  const {section}=await params;
  return <SubjectPage params={Promise.resolve({slug:'uttarakhand',section})}/>;
}
export function generateStaticParams(){
  return [
    'geography','history','polity-administration','economy-development','society-culture','environment-resources','movements','schemes-development','current-affairs','misc-gk'
  ].map(section=>({section}));
}
