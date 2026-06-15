/**
 * Maps the string icon keys used in lib/products.js to Heroicon components,
 * keeping the data module free of JSX imports.
 */
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ShareIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

export const iconMap = {
  document: DocumentTextIcon,
  shield: ShieldCheckIcon,
  mobile: DevicePhoneMobileIcon,
  badge: CheckBadgeIcon,
  microphone: MicrophoneIcon,
  search: MagnifyingGlassIcon,
  clipboard: ClipboardDocumentCheckIcon,
  team: UserGroupIcon,
  book: BookOpenIcon,
  chart: ChartBarIcon,
  rocket: RocketLaunchIcon,
  graph: ShareIcon,
  link: LinkIcon,
  chat: ChatBubbleLeftRightIcon,
  heart: HeartIcon,
  trend: ArrowTrendingUpIcon,
  eye: EyeIcon,
};

export const getIcon = (key) => iconMap[key] || SparklesIcon;
