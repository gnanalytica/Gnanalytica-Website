import LegalDocument from '../../components/legal/LegalDocument';
import LegalHead from '../../components/legal/LegalHead';
import { loadLegalDocument } from '../../lib/legalMarkdown';

const PATH = '/field-companion/privacy';

/** Field Companion privacy notice, served at /field-companion/privacy. Text: content/field-companion/privacy.md. */
export default function FieldCompanionPrivacy({ doc }) {
  return (
    <>
      <LegalHead
        title={doc.title}
        description="How Gnanalytica in the Netherlands handles personal data in Field Companion, the AI assistant for site visits: roles, data, AI, retention, transfers and your rights."
        path={PATH}
        draft={doc.markers > 0}
      />
      <LegalDocument doc={doc} path={PATH} />
    </>
  );
}

export function getStaticProps() {
  return { props: { doc: loadLegalDocument('privacy') } };
}
