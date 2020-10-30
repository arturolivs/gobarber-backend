import IMailTemplateProvider from '@shared/container/providers/MailTemplate/models/IMailTemplateProvider';
import IParseMailTemplateDTO from '@shared/container/providers/MailTemplate/dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}
export default FakeMailTemplateProvider;
