// Capabilities supported by résumé project records and inspected public repositories.
// A repository fork alone is not evidence of implementation experience.
export const skillGroups = [
  {
    title: 'LLMs & conversational AI',
    items: [
      {
        id: 'rag', title: 'Retrieval & knowledge grounding',
        description: 'Designed graph-based, two-level retrieval for enterprise knowledge, with OCR/NLP ingestion and periodic document updates.',
        tools: ['Python', 'GraphRAG', 'LangChain', 'vLLM'],
        references: [{ projectId: 'graph-rag', basis: 'Portfolio résumé record' }, { projectId: 'voicebot', basis: 'Portfolio résumé record' }]
      },
      {
        id: 'agents', title: 'Multi-agent orchestration & tool calling',
        description: 'Built context-aware scheduling agents with Google Workspace integrations and OAuth2; chained LLM tools to extract structured CV data.',
        tools: ['LangChain', 'OpenAI API', 'Vertex AI', 'OAuth2'],
        references: [{ projectId: 'calendar', basis: 'Résumé', url: '/resume/resume.pdf' }, { projectId: 'jobfit', basis: 'Résumé', url: '/resume/resume.pdf' }]
      },
      {
        id: 'conversations', title: 'Voice assistants & intent routing',
        description: 'Implemented intent classification, date and entity extraction, FAQ retrieval and business conversation paths; streamed assistant responses for EdTech queries.',
        tools: ['RAG', 'SLM', '.NET', 'Microsoft Agent Framework'],
        references: [{ projectId: 'voicebot', basis: 'Portfolio résumé record' }, { projectId: 'alice', basis: 'Portfolio résumé record' }]
      }
    ]
  },
  {
    title: 'Speech & model development',
    items: [
      {
        id: 'speech', title: 'Vietnamese TTS & voice cloning',
        description: 'Relabeled Vietnamese speech with Qwen3-ASR, fine tuned VoxCPM for Vietnamese prosody and built a Gradio demo with text normalization. Shipped a voice creation and cloning web app.',
        tools: ['PyTorch', 'Qwen3-ASR', 'VoxCPM', 'Gradio', 'Next.js'],
        references: [{ projectId: 'voxcpm-vn', basis: 'Model & demo', url: 'https://huggingface.co/JayLL13/VoxCPM-1.5-VN' }, { projectId: 'tiengnoi', basis: 'Product', url: 'https://tiengnoi.online' }]
      },
      {
        id: 'vision-training', title: 'Computer vision & model training',
        description: 'Trained YOLO detectors for tables, text and passport MRZ regions; built a VGG-19-based ceramic inpainting system and evaluated face detection models.',
        tools: ['PyTorch', 'YOLOv8 / v10', 'VGG-19', 'OpenCV'],
        references: [{ projectId: 'tax-extraction', basis: 'Portfolio résumé record' }, { projectId: 'passport-mrz', basis: 'Portfolio résumé record' }, { projectId: 'antiquities', basis: 'Portfolio résumé record' }]
      }
    ]
  },
  {
    title: 'Document AI & APIs',
    items: [
      {
        id: 'document-ai', title: 'OCR & structured document extraction',
        description: 'Reconstructed table rows, columns and cells as HTML; extracted invoice fields across 14 languages and machine-readable passport data.',
        tools: ['Python', 'PaddleOCR', 'Ultralytics', 'OpenCV'],
        references: [{ projectId: 'table2html', basis: 'Source code', url: 'https://github.com/jayll1303/table2html' }, { projectId: 'european-documents', basis: 'Portfolio résumé record' }, { projectId: 'passport-mrz', basis: 'Portfolio résumé record' }]
      },
      {
        id: 'image-processing', title: 'Image preprocessing & answer extraction',
        description: 'Applied background removal, contour detection, perspective correction and thresholding to read exam answers, student IDs and exam codes.',
        tools: ['Python', 'OpenCV', 'NumPy'],
        references: [{ projectId: 'answer-sheets', basis: 'Source code', url: 'https://github.com/jayll1303/Answer-Sheet-Extraction' }]
      },
      {
        id: 'apis', title: 'AI services & REST APIs',
        description: 'Exposed image extraction through FastAPI services and CV parsing through Flask APIs; packaged inference workflows in Docker containers.',
        tools: ['Python', 'FastAPI', 'Flask', 'Docker'],
        references: [{ projectId: 'answer-sheets', basis: 'Source code', url: 'https://github.com/jayll1303/Answer-Sheet-Extraction' }, { projectId: 'jobfit', basis: 'Résumé', url: '/resume/resume.pdf' }, { projectId: 'bib-extraction', basis: 'Portfolio résumé record' }]
      }
    ]
  },
  {
    title: 'Delivery & developer tools',
    items: [
      {
        id: 'cloud', title: 'Cloud deployment & model serving',
        description: 'Deployed self-hosted models with vLLM on Amazon EKS, a containerized voicebot on ECS, an assistant on Azure Container Apps and calendar agents on GCP.',
        tools: ['AWS EKS / ECS', 'vLLM', 'Azure Container Apps', 'Google Cloud', 'Docker'],
        references: [{ projectId: 'graph-rag', basis: 'Portfolio résumé record' }, { projectId: 'alice', basis: 'Portfolio résumé record' }, { projectId: 'calendar', basis: 'Résumé', url: '/resume/resume.pdf' }]
      },
      {
        id: 'packaging', title: 'Reusable Python packages & CI/CD',
        description: 'Published Table2HTML as an installable Python package, with a reusable detection API, a Streamlit interface and GitHub Actions delivery.',
        tools: ['Python', 'PyPI', 'GitHub Actions', 'Streamlit'],
        references: [{ projectId: 'table2html', basis: 'Package & source', url: 'https://github.com/jayll1303/table2html' }]
      },
      {
        id: 'extensions', title: 'Browser extensions & interactive Canvas',
        description: 'Built a Manifest V3 new-tab companion in TypeScript and Canvas 2D, with cursor tracking, drag interactions, local preferences and reduced-motion support.',
        tools: ['TypeScript', 'Canvas 2D', 'Chrome Extensions', 'Vite'],
        references: [{ projectId: 'pondie-tab', basis: 'Source code', url: 'https://github.com/jayll1303/TabMaka' }]
      },
      {
        id: 'windows', title: 'Windows customization with C++',
        description: 'Hooked Windows clipboard panel sizing and tab visibility with Windhawk; built a taskbar price monitor with configurable JSON APIs and refresh settings.',
        tools: ['C++', 'Windhawk', 'Windows 11', 'JSON API'],
        references: [{ projectId: 'winv-panel-tweaks', basis: 'Source code', url: 'https://github.com/jayll1303/WindowsClipboardMods/blob/main/mods/winv-panel-tweaks.wh.cpp' }, { projectId: 'coin-stock-monitor', basis: 'Source code', url: 'https://github.com/jayll1303/coin-stock-monitor' }]
      }
    ]
  }
];

export function filterSkillGroups(query, projects) {
  const normalized = query.trim().toLocaleLowerCase();
  return skillGroups.map(group => ({ ...group, items: group.items.filter(skill => {
    const referenceText = skill.references.map(reference => {
      const project = projects.find(item => item.id === reference.projectId);
      return `${project?.title || ''} ${project?.context || ''} ${reference.basis}`;
    }).join(' ');
    return `${group.title} ${skill.title} ${skill.description} ${skill.tools.join(' ')} ${referenceText}`.toLocaleLowerCase().includes(normalized);
  }) })).filter(group => group.items.length);
}
