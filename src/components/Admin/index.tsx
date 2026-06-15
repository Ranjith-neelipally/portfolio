import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "my-material-theme-ui-components";
import { getEnvVariable } from "../../utils/helpers";

const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-family: 'Outfit', sans-serif;
  color: #333;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  color: #2c3e50;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 10px;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.$active ? '#3498db' : '#718096'};
  cursor: pointer;
  padding: 8px 16px;
  position: relative;
  transition: color 0.3s;
  font-family: inherit;
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.$active ? '#3498db' : 'transparent'};
    transition: background 0.3s;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #f8fafc;
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    background: #fff;
  }
  &:disabled {
    background: #e2e8f0;
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #f8fafc;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    background: #fff;
  }
`;

const PreviewContainer = styled.div`
  margin-top: 10px;
  padding: 12px;
  background: #ebf8ff;
  border-left: 4px solid #3182ce;
  border-radius: 4px;
  font-size: 14px;
  color: #2b6cb0;
  word-break: break-all;
`;

const Message = styled.div<{ $isError?: boolean }>`
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  background: ${props => props.$isError ? '#fed7d7' : '#c6f6d5'};
  color: ${props => props.$isError ? '#9b2c2c' : '#22543d'};
  border: 1px solid ${props => props.$isError ? '#feb2b2' : '#9ae6b4'};
`;

const ToggleText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #4a5568;
  span {
    color: #3498db;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const OutButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background: #e2e8f0;
  color: #4a5568;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  font-family: inherit;
  &:hover {
    background: #cbd5e1;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 12px;
  button {
    flex: 1;
  }
`;

const UploadLabel = styled.label`
  display: inline-block;
  margin-top: 6px;
  cursor: pointer;
  color: #3498db;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Admin() {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  
  // Auth state
  const [token, setToken] = useState<string | null>(sessionStorage.getItem("authToken"));
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'skills'>('profile');

  // Profile states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [slug, setSlug] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [aboutMeSection1, setAboutMeSection1] = useState("");
  const [aboutMeSection2, setAboutMeSection2] = useState("");
  const [isSlugManual, setIsSlugManual] = useState(false);

  // Project states
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectPreviewUrl, setProjectPreviewUrl] = useState("");

  // Skills states
  const [frameworksText, setFrameworksText] = useState("");
  const [skillsText, setSkillsText] = useState("");
  const [toolsText, setToolsText] = useState("");

  // Status states
  const [message, setMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [uploading, setUploading] = useState(false);

  // Auto-generate slug from username
  useEffect(() => {
    if (!isSignUp && token) return;
    if (isSlugManual) return;

    const generated = userName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(generated);
  }, [userName, isSlugManual, isSignUp, token]);

  // Load current admin details once logged in
  useEffect(() => {
    if (!token) return;

    const fetchAdminDetails = async () => {
      const cachedAdmin = sessionStorage.getItem("admin");
      let currentEmail = "";
      if (cachedAdmin) {
        currentEmail = JSON.parse(cachedAdmin).email || "";
      }

      if (!currentEmail) return;

      try {
        const res = await axios.get(`${baseUrl}get-admin`, {
          params: { email: currentEmail }
        });
        if (res.status === 200 && res.data?.response) {
          const details = res.data.response;
          setEmail(details.email);
          setUserName(details.userName || "");
          setSlug(details.slug || "");
          setProfilePic(details.profilePic || "");
          setAboutMeSection1(details.aboutMeSection1 || "");
          setAboutMeSection2(details.aboutMeSection2 || "");
          setIsSlugManual(true);

          sessionStorage.setItem("admin", JSON.stringify(details));

          if (details.skills && details.skills.length > 0) {
            try {
              const skillsRes = await axios.get(`${baseUrl}skills`, {
                params: { email: details.email }
              });
              if (skillsRes.status === 200 && skillsRes.data?.allSkills) {
                const allSkills = skillsRes.data.allSkills;
                setFrameworksText(allSkills.frameWorks?.join(", ") || "");
                setSkillsText(allSkills.skills?.join(", ") || "");
                setToolsText(allSkills.tools?.join(", ") || "");
              }
            } catch (skillsErr) {
              console.error("Failed to fetch skills", skillsErr);
            }
          }
        }
      } catch (err: any) {
        console.error("Failed to load details", err);
      }
    };

    fetchAdminDetails();
  }, [token, baseUrl]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      if (isSignUp) {
        const res = await axios.post(`${baseUrl}auth/signup`, {
          email,
          password,
          userName,
          slug
        });
        setMessage({ text: res.data.message || "Registration successful! You can now log in." });
        setIsSignUp(false);
      } else {
        const res = await axios.post(`${baseUrl}auth/login`, {
          email,
          password
        });
        const responseData = res.data;
        if (responseData.token) {
          sessionStorage.setItem("authToken", responseData.token);
          sessionStorage.setItem("admin", JSON.stringify(responseData.user || { email }));
          setToken(responseData.token);
          setMessage({ text: "Logged in successfully!" });
        }
      }
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.error || err.response?.data?.message || "Authentication failed",
        isError: true
      });
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await axios.patch(
        `${baseUrl}auth/update-details`,
        {
          email,
          userName,
          slug,
          profilePic,
          aboutMeSection1,
          aboutMeSection2
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage({ text: res.data.message || "Profile updated successfully!" });
      
      const cached = sessionStorage.getItem("admin");
      if (cached) {
        const obj = JSON.parse(cached);
        obj.userName = userName;
        obj.slug = slug;
        obj.profilePic = profilePic;
        obj.aboutMeSection1 = aboutMeSection1;
        obj.aboutMeSection2 = aboutMeSection2;
        sessionStorage.setItem("admin", JSON.stringify(obj));
      }
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.error || err.response?.data?.message || "Failed to update profile",
        isError: true
      });
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const cachedAdmin = sessionStorage.getItem("admin");
    let userId = "";
    if (cachedAdmin) {
      const parsed = JSON.parse(cachedAdmin);
      userId = parsed.id || parsed._id || "";
    }

    if (!userId) {
      setMessage({ text: "Session info not found. Please log in again.", isError: true });
      return;
    }

    try {
      const res = await axios.post(
        `${baseUrl}projects/create`,
        {
          userId,
          projectName,
          description: projectDescription,
          projectPreview: projectPreviewUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage({ text: res.data.message || "Project created successfully!" });
      setProjectName("");
      setProjectDescription("");
      setProjectPreviewUrl("");
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.error || err.response?.data?.message || "Failed to create project",
        isError: true
      });
    }
  };

  const handleSaveSkills = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const cachedAdmin = sessionStorage.getItem("admin");
    let userId = "";
    let userEmail = "";
    let hasExistingSkills = false;

    if (cachedAdmin) {
      const parsed = JSON.parse(cachedAdmin);
      userId = parsed.id || parsed._id || "";
      userEmail = parsed.email || "";
      hasExistingSkills = parsed.skills && parsed.skills.length > 0;
    }

    if (!userId || !userEmail) {
      setMessage({ text: "Session info not found. Please log in again.", isError: true });
      return;
    }

    const frameWorksArray = frameworksText.split(",").map(s => s.trim()).filter(Boolean);
    const skillsArray = skillsText.split(",").map(s => s.trim()).filter(Boolean);
    const toolsArray = toolsText.split(",").map(s => s.trim()).filter(Boolean);

    try {
      if (hasExistingSkills) {
        const res = await axios.patch(
          `${baseUrl}skills/update-skills`,
          {
            userId,
            skills: {
              frameWorks: frameWorksArray,
              skills: skillsArray,
              tools: toolsArray
            }
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setMessage({ text: res.data.message || "Skills updated successfully!" });
      } else {
        const res = await axios.post(
          `${baseUrl}skills/add-skills`,
          {
            email: userEmail,
            frameWorks: frameWorksArray,
            skills: skillsArray,
            tools: toolsArray
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setMessage({ text: res.data.message || "Skills added successfully!" });
        if (res.data.user) {
          sessionStorage.setItem("admin", JSON.stringify(res.data.user));
        }
      }
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.error || err.response?.data?.message || "Failed to save skills",
        isError: true
      });
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, target: 'profile' | 'project') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Data = reader.result as string;
      setUploading(true);
      setMessage(null);

      const cachedAdmin = sessionStorage.getItem("admin");
      let userId = "";
      if (cachedAdmin) {
        const parsed = JSON.parse(cachedAdmin);
        userId = parsed.id || parsed._id || "";
      }

      try {
        const res = await axios.post(
          `${baseUrl}upload`,
          {
            filename: file.name,
            fileData: base64Data,
            userId,
            type: target
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (res.status === 200 && res.data.url) {
          if (target === 'profile') {
            setProfilePic(res.data.url);
            
            // Immediately update sessionStorage profilePic cache as well
            if (cachedAdmin) {
              const parsed = JSON.parse(cachedAdmin);
              parsed.profilePic = res.data.url;
              sessionStorage.setItem("admin", JSON.stringify(parsed));
            }
          } else {
            setProjectPreviewUrl(res.data.url);
          }
          setMessage({ text: "Image uploaded successfully to Vercel Blob!" });
        }
      } catch (err: any) {
        console.error("Upload failed", err);
        setMessage({
          text: err.response?.data?.error || err.response?.data?.message || "Failed to upload image",
          isError: true
        });
      } finally {
        setUploading(false);
      }
    };
    reader.onerror = (error) => {
      console.error("FileReader error: ", error);
    };
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("admin");
    setToken(null);
    setEmail("");
    setPassword("");
    setUserName("");
    setSlug("");
    setProfilePic("");
    setAboutMeSection1("");
    setAboutMeSection2("");
    setIsSlugManual(false);
    setMessage(null);
  };

  if (!token) {
    return (
      <Container>
        <Title>{isSignUp ? "Create Portfolio Admin" : "Portfolio Admin Login"}</Title>
        {message && <Message $isError={message.isError}>{message.text}</Message>}
        <Form onSubmit={handleAuth}>
          {isSignUp && (
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ravi Teja"
                required
              />
            </FormGroup>
          )}

          <FormGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </FormGroup>

          {isSignUp && (
            <>
              <FormGroup>
                <Label>Portfolio URL Slug</Label>
                <Input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setIsSlugManual(true);
                  }}
                  placeholder="ravi-teja"
                  required
                />
              </FormGroup>
              <PreviewContainer>
                Preview URL: <strong>https://www.neelipally.com/{slug || "ravi-teja"}</strong>
              </PreviewContainer>
            </>
          )}

          <ButtonContainer>
            <Button>{isSignUp ? "Sign Up" : "Log In"}</Button>
          </ButtonContainer>
        </Form>
        <ToggleText>
          {isSignUp ? (
            <>
              Already have an account? <span onClick={() => setIsSignUp(false)}>Log In</span>
            </>
          ) : (
            <>
              Need an admin portfolio? <span onClick={() => setIsSignUp(true)}>Sign Up</span>
            </>
          )}
        </ToggleText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Admin Portfolio Settings</Title>
      
      <TabContainer>
        <Tab $active={activeTab === 'profile'} onClick={() => { setActiveTab('profile'); setMessage(null); }}>
          Profile & Bio
        </Tab>
        <Tab $active={activeTab === 'projects'} onClick={() => { setActiveTab('projects'); setMessage(null); }}>
          Add Project
        </Tab>
        <Tab $active={activeTab === 'skills'} onClick={() => { setActiveTab('skills'); setMessage(null); }}>
          Manage Skills
        </Tab>
      </TabContainer>

      {message && <Message $isError={message.isError}>{message.text}</Message>}

      {activeTab === 'profile' && (
        <Form onSubmit={handleUpdateProfile}>
          <FormGroup>
            <Label>Email (Primary Account ID)</Label>
            <Input type="email" value={email} disabled />
          </FormGroup>

          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                if (!isSlugManual) {
                  const generated = e.target.value
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "");
                  setSlug(generated);
                }
              }}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Portfolio URL Slug</Label>
            <Input
              type="text"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setIsSlugManual(true);
              }}
              required
            />
          </FormGroup>

          <PreviewContainer>
            Live Preview: <a href={`/${slug}`} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "#3182ce" }}>
              https://www.neelipally.com/{slug}
            </a>
          </PreviewContainer>

          <FormGroup>
            <Label>Profile Picture URL</Label>
            <Input
              type="text"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
            />
            <UploadLabel>
              {uploading ? "Uploading..." : "Or click here to upload a local picture..."}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'profile')}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </UploadLabel>
          </FormGroup>

          <FormGroup>
            <Label>About Me - Section 1 (Introduction)</Label>
            <TextArea
              value={aboutMeSection1}
              onChange={(e) => setAboutMeSection1(e.target.value)}
              placeholder="Introduce yourself e.g. name, role, experience, current company..."
            />
          </FormGroup>

          <FormGroup>
            <Label>About Me - Section 2 (Interests & Closing)</Label>
            <TextArea
              value={aboutMeSection2}
              onChange={(e) => setAboutMeSection2(e.target.value)}
              placeholder="Tell visitors about your hobbies, stack interests, and what you are looking for..."
            />
          </FormGroup>

          <ButtonContainer>
            <Button>Save Profile Settings</Button>
            <OutButton type="button" onClick={handleLogout}>
              Log Out
            </OutButton>
          </ButtonContainer>
        </Form>
      )}

      {activeTab === 'projects' && (
        <Form onSubmit={handleAddProject}>
          <FormGroup>
            <Label>Project Name</Label>
            <Input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. Portfolio Builder Website"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Project Description (Min 30 characters)</Label>
            <TextArea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Describe the goals, tech stack, features, and your individual contribution to the project..."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Project Preview Image URL</Label>
            <Input
              type="text"
              value={projectPreviewUrl}
              onChange={(e) => setProjectPreviewUrl(e.target.value)}
              placeholder="e.g. https://example.com/project-image.jpg"
              required
            />
            <UploadLabel>
              {uploading ? "Uploading..." : "Or click here to upload a local picture..."}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'project')}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </UploadLabel>
          </FormGroup>

          <ButtonContainer>
            <Button>Create Project</Button>
            <OutButton type="button" onClick={handleLogout}>
              Log Out
            </OutButton>
          </ButtonContainer>
        </Form>
      )}

      {activeTab === 'skills' && (
        <Form onSubmit={handleSaveSkills}>
          <FormGroup>
            <Label>Frameworks (comma-separated list)</Label>
            <Input
              type="text"
              value={frameworksText}
              onChange={(e) => setFrameworksText(e.target.value)}
              placeholder="e.g. React.js, Next.js, Express, Mongoose"
            />
          </FormGroup>

          <FormGroup>
            <Label>Skills (comma-separated list)</Label>
            <Input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder="e.g. Frontend Development, UI/UX Design, REST APIs"
            />
          </FormGroup>

          <FormGroup>
            <Label>Tools (comma-separated list)</Label>
            <Input
              type="text"
              value={toolsText}
              onChange={(e) => setToolsText(e.target.value)}
              placeholder="e.g. Git, Figma, Webpack, Docker"
            />
          </FormGroup>

          <ButtonContainer>
            <Button>Save Skills</Button>
            <OutButton type="button" onClick={handleLogout}>
              Log Out
            </OutButton>
          </ButtonContainer>
        </Form>
      )}
    </Container>
  );
}
