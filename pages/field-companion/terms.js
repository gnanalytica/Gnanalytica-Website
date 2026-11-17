import LegalDocument from '../../components/legal/LegalDocument';
import LegalHead from '../../components/legal/LegalHead';
import { loadLegalDocument } from '../../lib/legalMarkdown';

const PATH = '/field-companion/terms';

/** Field Companion Terms of Service, served at /field-companion/terms. Text: content/field-companion/terms.md. */
export default function FieldCompanionTerms({ doc }) {
  return (
    <>
      <LegalHead
        title={doc.title}
        description="The terms of service for Field Companion, the AI assistant for site visits provided by Gnanalytica in the Netherlands (KvK 98649035)."
        path={PATH}
        draft={doc.markers > 0}
      />
      <LegalDocument doc={doc} path={PATH} />
    </>
  );
}

export function getStaticProps() {
  return { props: { doc: loadLegalDocument('terms') } };
}
