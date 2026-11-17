import LegalDocument from '../../components/legal/LegalDocument';
import LegalHead from '../../components/legal/LegalHead';
import { loadLegalDocument } from '../../lib/legalMarkdown';

const PATH = '/field-companion/subprocessors';

/** Field Companion subprocessor list, served at /field-companion/subprocessors. Text: content/field-companion/subprocessors.md. */
export default function FieldCompanionSubprocessors({ doc }) {
  return (
    <>
      <LegalHead
        title={doc.title}
        description="The companies Gnanalytica uses to run Field Companion, what data they handle, where, and how we tell customers about changes."
        path={PATH}
        draft={doc.markers > 0}
      />
      <LegalDocument doc={doc} path={PATH} />
    </>
  );
}

export function getStaticProps() {
  return { props: { doc: loadLegalDocument('subprocessors') } };
}
