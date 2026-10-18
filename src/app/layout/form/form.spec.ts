import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form } from './form';

describe('Form', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the challenge options and update the form value on selection', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('#challenge');

    expect(select.options.length).toBe(8);
    expect(select.options[1].value).toBe('mesh_branches');

    select.value = 'mesh_branches';
    select.dispatchEvent(new Event('change'));

    expect(component.contactForm.controls['challenge'].value).toBe('mesh_branches');
  });
});
